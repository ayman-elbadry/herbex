<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Commande;

class CommandeController extends Controller
{
    // Afficher toutes les commandes
    public function index()
    {
        $commandes = Commande::all();
        return response()->json($commandes);
    }

    // Afficher une commande spécifique
    public function show($id)
    {
        $commande = Commande::findOrFail($id);
        return response()->json($commande);
    }

    // Enregistrer une nouvelle commande
    public function store(Request $request)
    {
        // Validation des données ici

        $commande = Commande::create($request->all());
        return response()->json($commande, 201);
    }

    // Mettre à jour une commande existante
    public function update(Request $request, $id)
    {
        $commande = Commande::findOrFail($id);
        $commande->update($request->all());
        return response()->json($commande, 200);
    }

    // Supprimer une commande
    public function destroy($id)
    {
        $commande = Commande::findOrFail($id);
        $commande->delete();
        return response()->json(null, 204);
    }
}
