<?php

    namespace App\Http\Controllers\Api;

    use App\Http\Controllers\Controller;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Hash;
    use Illuminate\Support\Facades\Validator;
    use Illuminate\Support\Str;
    use Laravel\Passport;
    use App\Models\User;


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
            $request['remember_token'] = Str::random(10);
            User::create($request->toArray());
             $response = ['response' => 'registered'];
            return response($response, 200);
        }

        public function login (Request $request) {
            $validator = Validator::make($request->all(), [
                'email' => 'required|string|email|max:255',
                'password' => 'required|string|min:6|confirmed',
            ]);
            if ($validator->fails())
            {
                return response(['errors'=>$validator->errors()->all()], 422);
            }
            $user = User::where('email', $request->email)->first();
            if ($user) {
                if (Hash::check($request->password, $user->password)) {
                    $response = ['message' => 'logged in'];
                    return response($response, 200);
                } else {
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
