<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/admin_register', [AuthController::class, 'admin_register']);
Route::post('/pay', [PaymentController::class, 'pay']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/admin_login', [AuthController::class, 'admin_login']);

Route::get('/pn/{id}', [UserController::class, 'show']);
Route::get('/pn/search/{name}', [UserController::class, 'search']);
Route::get('/pn', [UserController::class, 'index']);
Route::get('/payment', [PaymentController::class, 'index']);



// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/pn', [UserController::class, 'store']);
    Route::put('/pn/{id}', [UserController::class, 'update']);
    Route::delete('/pn/{id}', [UserController::class, 'destroy']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
