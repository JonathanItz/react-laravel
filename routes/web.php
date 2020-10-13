<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get( '/', [Controllers\UsersController::class, 'index'] )->name( 'users' );
Route::get( '/user/{name}', function( Request $request  ) {
    $name = $request->name;

    $ids = [
        'Jon' => 1,
        'Lucas' => 2,
    ];

    if( ! Arr::exists( $ids, $name ) ) abort( '404' );

    return Inertia::render( 'User', [
        'user' => [
            'name' => $name,
            'user_id' => $ids[ $name ]
        ]
    ]);
})->name( 'user' );

Route::get( '/about', function() {
    return Inertia::render( 'About' );
});

Route::view( '/static', 'static' );
