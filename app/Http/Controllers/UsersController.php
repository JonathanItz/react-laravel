<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Auth;

class UsersController extends Controller
{
    public function index() {
        return Inertia::render( 'Users', [
            'users' => [
                [
                    'name' => 'Jon'
                ],
                [
                    'name' => 'Lucas'
                ]
            ],
            'current_user' => Auth::user()
        ]);
    }
}
