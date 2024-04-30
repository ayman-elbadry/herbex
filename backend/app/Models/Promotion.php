<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;
class Promotion extends Model
{
    protected $fillable = [
        'titre', 'description', 'date_debut', 'date_fin', 'discount',
    ];

    public function produits()
    {
        return $this->belongsToMany(Produit::class);
    }
}
