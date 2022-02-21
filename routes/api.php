<?php

    use App\Http\Controllers\OauthController;
    use App\Http\Controllers\PassportAuthController;
    use Illuminate\Support\Facades\Route;


    // oAuth routes
Route::post('/redirect-user', [OauthController::class, 'redirect']);
Route::get('/callback', [OauthController::class, 'callback']);




    // login and registration routes
    Route::post('/register-user', [PassportAuthController::class, 'register'])->name('register');
    Route::post('/login', [ PassportAuthController::class, 'login'])->name('login');

    // protected routes
    Route::middleware('auth:api')->group(function () {

        Route::get('/logout', [PassportAuthController::class, 'logout']);
        Route::get('/get-user', [PassportAuthController::class, 'userInfo']);

    });



