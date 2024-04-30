<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
class MessageController extends Controller
{

public function index()
{
    $messages = Message::all();
    return response()->json($messages);
}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation des données de la requête
        $request->validate([
            'contenu' => ['required', 'string'],
            'client_id' => ['required', 'exists:clients,id'],
            'statut' => ['required', 'string'],
        ]);

        // Création du message
        $message = Message::create([
            'contenu' => $request->contenu,
            'client_id' => $request->client_id,
            'statut' => $request->statut,
        ]);

        // Retourner une réponse
        return response()->json(['message' => 'Message créé avec succès', 'data' => $message], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
{
    $message = Message::findOrFail($id);
    return response()->json($message);
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
{
    $request->validate([
        'content' => 'required|string',
        // Ajoutez d'autres règles de validation si nécessaire
    ]);

    $message = Message::findOrFail($id);
    $message->update([
        'content' => $request->content,
        // Ajoutez d'autres champs si nécessaire
    ]);

    return response()->json($message);
}

    /**
     * Remove the specified resource from storage.
     */
    
        //
        public function destroy($id)
        {
            $message = Message::findOrFail($id);
            $message->delete();
        
            return response()->json(null, 204);
        }
    }
