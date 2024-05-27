<?php

namespace App\Models;

use App\Models\Commande;
use App\Models\Produit;
use Illuminate\Database\Eloquent\Model;

class CommandeProduit extends Model
{
    protected $table = 'commande_produit';

    protected $fillable = [
        'commande_id', 'produit_id', 'quantite', 'prix_unitaire',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class);
    }

    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($commandeProduit) {
            if ($commandeProduit->commande_id && !Commande::find($commandeProduit->commande_id)) {
                throw new \Exception('La commande associée n\'existe pas.');
            }

            if ($commandeProduit->produit_id && !Produit::find($commandeProduit->produit_id)) {
                throw new \Exception('Le produit associé n\'existe pas.');
            }
        });
    }
}
