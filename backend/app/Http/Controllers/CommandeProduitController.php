<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CommandeProduit;

class CommandeProduitController extends Controller
{
    public function ajouterProduit(Request $request, $commande_id)
    {
        $request->validate([
            'produit_id' => 'required|exists:produits,id',
            'quantite' => 'required|integer|min:1',
            'prix_unitaire' => 'required|numeric|min:0',
        ]);

        $commandeProduit = CommandeProduit::create([
            'commande_id' => $commande_id,
            'produit_id' => $request->produit_id,
            'quantite' => $request->quantite,
            'prix_unitaire' => $request->prix_unitaire,
        ]);



        return response()->json($commandeProduit, 201);
    }

    public function modifierProduit(Request $request, $commande_id, $produit_id)
    {
        $request->validate([
            'quantite' => 'required|integer|min:1',
            'prix_unitaire' => 'required|numeric|min:0',
        ]);

        $commandeProduit = CommandeProduit::where('commande_id', $commande_id)
            ->where('produit_id', $produit_id)
            ->firstOrFail();

        $commandeProduit->update([
            'quantite' => $request->quantite,
            'prix_unitaire' => $request->prix_unitaire,
        ]);

        return response()->json($commandeProduit, 200);
    }

    public function supprimerProduit($commande_id, $produit_id)
    {
        $commandeProduit = CommandeProduit::where('commande_id', $commande_id)
            ->where('produit_id', $produit_id)
            ->firstOrFail();

        $commandeProduit->delete();

        return response()->json(null, 204);
    }
}
