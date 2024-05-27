<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientController extends Controller
{
     
    public function index()
    {
        $clients = Client::all();
        return response()->json($clients);
    }

    // Afficher un client spécifique
    public function show($id)
    {
        $client = Client::findOrFail($id);
        return response()->json($client);
    }

    // Enregistrer un nouveau client
    public function store(Request $request)
    {
        // Validation des données ici

        $client = Client::create($request->all());
        return response()->json($client, 201);
    }

    // Mettre à jour un client existant
    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        $client->update($request->all());
        return response()->json($client, 200);
    }

    // Supprimer un client
    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();
        return response()->json(null, 204);
    }
}
