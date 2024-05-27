<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Client;
class Message extends Model
{
    protected $fillable = [
        'contenu', 'client_id','statut',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
