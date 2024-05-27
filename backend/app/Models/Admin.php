<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\Notifications;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'nom', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function notifications()
    {
        return $this->hasMany(Notifications::class);
    }
}
