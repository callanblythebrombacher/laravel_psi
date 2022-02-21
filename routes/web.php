<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware'=>['auth:api','cors']], function(){

    Route::get('/admin-area', function () {

        return view('adminDash');

    })->middleware([
        'scope:createUser',
        'scope:deleteUser',
        'scope:editCurrentProfile',
        'scope:editUser',
        'scope:canCreateAdmin',]);

    Route::get('/user-area', function () {
        return view('userDash');
    })->middleware([
        'scope:editCurrentProfile',]);

});



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
