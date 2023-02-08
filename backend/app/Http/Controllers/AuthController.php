<?php

namespace App\Http\Controllers;


use App\Models\User;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users|email',
            'username'=>'required|string|unique:users',
            'password' => 'required|string|confirmed'

        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'username'=>$fields['username'],
            'password' => bcrypt($fields['password'])

        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response("user created successfully", 201);
    }
    public function admin_register(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = Admin::create([
            'name' => $fields['name'],
            'email' => $fields['email'],

            'password' => bcrypt($fields['password'])

        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response("user created successfully", 201);
    }

    public function login(Request $request) {
        $fields = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        // Check username
        $user = User::where('username', $fields['username'])->first();
        // Check password
        if(!$user) {
            return response([
                'message' => 'Invalid Email'
            ], 401);
        }
        if( !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Invalid Password'
            ], 401);
        }


        $token = $user ->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201, );
    }
    public function admin_login(Request $request) {
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        // Check email
        $user = Admin::where('email', $fields['email'])->first();
        // Check password

        if(!$user) {
            return response([
                'message' => 'Invalid Email'
            ], 401);
        }
        if( !Hash::check($fields['password'], $user->password)) {
            return response([
                'message' => 'Invalid Password'
            ], 401);
        }


        $token = $user ->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201, );
    }

    public function logout(Request $request)
    {
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();
        }
        return [
            'message' => 'Logged out'
        ];
    }
}
