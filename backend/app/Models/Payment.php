<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'receiver_name',
        'receiver_card_number',
        'sender_name',
        'sender_card_number',
        'amount',
        'user_id',
        'payment_method'

    ];
public function user()
{
    return $this->belongsTo(User::class);
}

}
