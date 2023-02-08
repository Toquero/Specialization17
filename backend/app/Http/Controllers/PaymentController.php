<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;
use App\Models\User;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Payment::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'role' => 'required'

        ]);

        return Payment::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Payment::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $payment = Payment::find($id);
        $payment->update($request->all());
        return $payment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Payment::destroy($id);
    }
 /**
     * Search for a name
     *
     * @param  str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name)
    {
        return Payment::where('name', 'like', '%'.$name.'%')->get();
    }
    public function pay(Request $request) {
        $fields = $request->validate([
            'receiver_name' => 'required|string',
            'receiver_card_number' => 'required',
            'sender_name' => 'required|string',
            'sender_card_number' => 'required',
            'user_id'=>'required',
            'payment_method'=>'required',
            'amount' => 'required',
        ]);

        $payment = Payment::create([
            'receiver_name' => $fields['receiver_name'],
            'receiver_card_number' => $fields['receiver_card_number'],
            'sender_name' =>$fields['sender_name'],
            'sender_card_number' =>$fields['sender_card_number'],
            'payment_method'=>$fields['payment_method'],
            'user_id'=>$fields['user_id'],
            'amount' =>$fields['amount'],

        ]);

        $response = [
            'payment' => $payment,
        ];

        return response($response, 201);
    }
}
