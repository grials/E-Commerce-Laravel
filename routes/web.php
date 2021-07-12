<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
routes are loaded by the RouteServiceProvider within a group which
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/register', function () {
    return view('Register');
});

Route::get('/login', function () {
    return view('Login');
});