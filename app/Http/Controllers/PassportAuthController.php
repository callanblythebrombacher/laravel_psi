<?php

    namespace App\Http\Controllers;

    use App\Models\User;
    use Artisan;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Support\Facades\Validator;
    use App\Http\Controllers\Api;



    class PassportAuthController extends Controller {

        public function logout( Request $request ) {
            $token = $request->user()->token();
            $token->revoke();
            $response = [ 'message' => 'You have been successfully logged out!' ];

            return response( $response, 200 );
        }

        public function register (Request $request) {

            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:6|confirmed',
            ]);

            if ($validator->fails())
            {
                return response(['errors'=>$validator->errors()->all()], 422);
            }

            $request['password']=Hash::make($request['password']);

            User::create($request->toArray());
            $response = ['response' => 'registered'];

            if(User::count() === 1){
                DB::table('users')->update(['access_level'=>true]);
                Artisan::call('db:seed', ['--class' => 'DatabaseSeeder']);
            }

            return response($response, 200);
        }

        public function login (Request $request) {

            $validator = Validator::make($request->all(), [
                'email' => 'required|string|max:255',
                'password' => 'required|string|min:6',
            ]);

            if ($validator->fails())
            {
                return response(['errors'=>$validator->errors()->all()], 422);
            }

            $user = User::where('email', $request->email)->first();
            if ($user) {

                if (Hash::check($request->password, $user->password)) {

                    $clientRepository = app('Laravel\Passport\ClientRepository');
                    $client = $clientRepository->create($user->id, 'MyTest', 'http://localhost:8000/', 0, 0,1);
                    $client_secret = DB::table('oauth_clients')->where('oauth_clients.id', '=',$client['id'])->get()->first()->secret;

                    $response = Http::asForm()->post('http://localhost:8001/oauth/token', [

                            'grant_type' => 'password',
                            'client_id' => $client['id'],
                            'client_secret' => $client_secret,
                            'username' => $user->email,
                            'password' => $request->password,
                            'scope' => ($user->access_level) ? 'editUsers deleteUsers isAdmin canCreateAdmin editCurrent createUsers': 'canEdit',

                        ]);

                    return json_decode((string) $response->getBody(), true);
                    }
                else {
                    $response = ["message" => "Password mismatch"];
                    return response($response, 422);
                }
            } else {
                $response = ["message" =>'User does not exist'];
                return response($response, 422);
            }
        }
        public function userInfo() {

            $user = auth()->user();

            return response()->json( [ 'user' => $user ], 200 );

        }


    }
