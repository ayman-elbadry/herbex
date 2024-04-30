<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Client;
class Notification extends Model
{
    protected $fillable = [
        'client_id','contenu','statut', 'admin_id',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
