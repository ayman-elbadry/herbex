<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Promotion;

class PromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $promotions = Promotion::all();
        return response()->json(['data' => $promotions]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'discount' => 'required|numeric|min:0',
        ]);

        $promotion = Promotion::create($request->all());

        return response()->json(['message' => 'Promotion created successfully', 'data' => $promotion], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */


    /**
     * Display the specified resource.
     */
    public function show(Promotion $promotion)
    {
        return response()->json(['data' => $promotion]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Promotion $promotion)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut',
            'discount' => 'required|numeric|min:0',
        ]);

        $promotion->update($request->all());

        return response()->json(['message' => 'Promotion updated successfully', 'data' => $promotion]);
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Promotion $promotion)
    {
        $promotion->delete();

        return response()->json(['message' => 'Promotion deleted successfully']);
    }
}
