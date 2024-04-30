<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produit;

class ProduitController extends Controller
{
    
    public function index()
    {
        $produits = Produit::all();
        return response()->json(['data' => $produits]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation des données de la requête
        $request->validate([
            'nom' => ['required', 'string'],
            'description' => ['required', 'string'],
            'images' => ['required', 'string'],
            'prix' => ['required', 'numeric'],
            'poids_volume' => ['required', 'numeric'],
            'categorie_id' => ['required', 'exists:categories,id'],
            'taille' => ['nullable', 'string'],
            'saveur' => ['nullable', 'string'],
            'concentration' => ['nullable', 'string'],
        ]);

        // Création du produit
        $produit = Produit::create([
            'nom' => $request->nom,
            'description' => $request->description,
            'images' => $request->images,
            'prix' => $request->prix,
            'poids_volume' => $request->poids_volume,
            'categorie_id' => $request->categorie_id,
            'taille' => $request->taille,
            'saveur' => $request->saveur,
            'concentration' => $request->concentration,
        ]);

        // Retourner une réponse
        return response()->json(['message' => 'Produit créé avec succès', 'data' => $produit], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Produit $produit)
    {
        return response()->json(['data' => $produit]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produit $produit)
    {
        // Validation des données de la requête
        $request->validate([
            'nom' => ['required', 'string'],
            'description' => ['required', 'string'],
            'images' => ['required', 'string'],
            'prix' => ['required', 'numeric'],
            'poids_volume' => ['required', 'string'],
            'categorie_id' => ['required', 'exists:categories,id'],
            'taille' => ['nullable', 'string'],
            'saveur' => ['nullable', 'string'],
            'concentration' => ['nullable', 'string'],
        ]);
        $produit->update([
            'nom' => $request->nom,
            'description' => $request->description,
            'images' => $request->images,
            'prix' => $request->prix,
            'poids_volume' => $request->poids_volume,
            'categorie_id' => $request->categorie_id,
            'taille' => $request->taille,
            'saveur' => $request->saveur,
            'concentration' => $request->concentration,
        ]);
        return response()->json(['message' => 'Produit mis à jour avec succès', 'data' => $produit]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produit $produit)
    {
        $produit->delete();
        return response()->json(['message' => 'Produit supprimé avec succès']);
    }
}
