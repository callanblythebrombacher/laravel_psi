<?php
    use App\Http\Controllers\Api\PassportAuthController;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Route;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Support\Str;


Route::group(['middleware' => ['cors', 'web']], function () {

    Route::post('/register', [PassportAuthController::class, 'register']);

    Route::post('/login', [ PassportAuthController::class, 'login'])->name('login');

    Route::get('/redirect-user', function (Request $request) {
        $request->session()->put('state', $state = Str::random(40));

        $query = http_build_query([
            'client_id' => 'client-id',
            'redirect_uri' => 'http://localhost:8000/callback',
            'response_type' => 'code',
            'scope' => 'canEdit',
            'state' => $state,
        ]);

        return redirect('http://localhost:8000/oauth/authorize?'.$query);
    });

    Route::get('/callback', function (Request $request) {
        $state = $request->session()->pull('state');

        throw_unless(
            strlen($state) > 0 && $state === $request->state,
            InvalidArgumentException::class
        );

        $response = Http::asForm()->post('http://localhost:8000/oauth/token', [
            'grant_type' => 'authorization_code',
            'client_id' => 'client-id',
            'client_secret' => 'client-secret',
            'redirect_uri' => 'http://localhost:8000/user-dash',
            'code' => $request->code,
        ]);

        return $response->json();
    });

    Route::middleware('auth:api')->group(function () {

        Route::get('/get-user', [PassportAuthController::class, 'userInfo']);
    });
});


