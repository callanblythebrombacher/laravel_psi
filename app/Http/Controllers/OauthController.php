<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class OauthController extends Controller {

    public function callback( Request $request ) {
        $state = $request->session()->pull( 'state' );

        throw_unless(
            strlen( $state ) > 0 && $state === $request->state,
            InvalidArgumentException::class
        );

        $response = Http::asForm()->post( 'http://localhost:8000/oauth/token', [
            'grant_type'    => 'authorization_code',
            'client_id'     => 'client-id',
            'client_secret' => 'client-secret',
            'redirect_uri'  => 'http://localhost:8000/user-dash',
            'code'          => $request->code,
        ] );

        return $response->json();
    }

   public function redirect(Request $request){
       $request->session()->put('state', $state = Str::random(40));

       $isAdmin = User::select('access_level')->where('email', '=', $request['email'])->get();

       if(!$isAdmin) {
           $query = http_build_query( [
               'client_id'     => 'client-id',
               'redirect_uri'  => 'http://localhost:8000/callback',
               'response_type' => 'code',
               'scope'         => 'canEdit',
               'state'         => $state,
           ] );
       }else{
           $query = http_build_query( [
               'client_id'     => 'client-id',
               'redirect_uri'  => 'http://localhost:8000/callback',
               'response_type' => 'code',
               'scope'         => [
                                    'editUsers',
                                    'deleteUsers',
                                    'isAdmin',
                                    'canCreateAdmin',
                                    'editCurrent',
                                    'createUsers',
                                    'deleteUsers'
                                                ],
               'state'         => $state,
           ] )
       }
       return redirect('http://localhost:8000/oauth/authorize?'.$query);
   }
}
