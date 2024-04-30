<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;

class Tag extends Model
{
    protected $fillable = [
        'nom',
    ];

    public function produits()
    {
        return $this->belongsToMany(Produit::class);
    }
}
