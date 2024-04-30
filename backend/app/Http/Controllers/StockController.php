<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stocks = Stock::all();
        return response()->json(['data' => $stocks]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'produit_id' => 'required|exists:produits,id',
            'quantite' => 'required|numeric|min:0',
        ]);

        $stock = Stock::create($request->all());

        return response()->json(['message' => 'Stock created successfully', 'data' => $stock], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Stock $stock)
    {
        return response()->json(['data' => $stock]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Stock $stock)
    {
        $request->validate([
            'quantite' => 'required|numeric|min:0',
        ]);

        $stock->update($request->all());

        return response()->json(['message' => 'Stock updated successfully', 'data' => $stock]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stock $stock)
    {
        $stock->delete();
        return response()->json(['message' => 'Stock deleted successfully']);
    }
}
