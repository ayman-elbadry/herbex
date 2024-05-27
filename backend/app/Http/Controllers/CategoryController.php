<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    // Afficher toutes les catégories
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }

    // Afficher une catégorie spécifique
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    // Enregistrer une nouvelle catégorie
    public function store(Request $request)
    {
        // Validation des données ici

        $category = Category::create($request->all());
        return response()->json($category, 201);
    }

    // Mettre à jour une catégorie existante
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);
        $category->update($request->all());
        return response()->json($category, 200);
    }

    // Supprimer une catégorie
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(null, 204);
    }
}
