<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categorie;
use App\Models\Commande;
use App\Models\Tag;

class Produit extends Model
{
    protected $fillable = [
        'nom', 'description', 'images', 'prix', 'poids_volume', 'categorie_id', 'taille', 'saveur', 'concentration',
    ];

    public function categorie()
    {
        return $this->belongsTo(Categorie::class);
    }

    public function commandes()
    {
        return $this->belongsToMany(Commande::class)->withPivot('quantite', 'prix_unitaire');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
