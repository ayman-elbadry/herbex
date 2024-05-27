<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Models\HistoriqueAchat;
use App\Models\Message;
use App\Models\Notification;
use App\Models\Commande;

class Client extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'nom', 'email', 'password','address', 'phone',
    ];

    protected $hidden = [
        'password', 'remember_token','created_at', 'updated_at',
    ];

    public function historiqueAchats()
    {
        return $this->hasMany(HistoriqueAchat::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
    public function commandes()
    {
        return $this->hasMany(Commande::class);
    }


    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    protected $table = 'clients';
}
