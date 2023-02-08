<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use App\Mail\Reminder;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;
class SendEmail extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'email:send';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

       $users=User::all();
       $data=['title'=>'Pn CounterPart','body'=>'You must pay!!!'];
       foreach($users as $user){
        Mail::to($user)->send(new Reminder($data,$user));
       }
       DB::table('users')->increment('balance',500);


    }
}
