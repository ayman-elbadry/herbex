<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Produit;

class Category extends Model
{
    protected $table="categories";
    protected $fillable = [
        'nom',
    ];

    public function produits()
    {
        return $this->hasMany(Produit::class);
    }
}
