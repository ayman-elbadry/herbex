<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\Client;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{


    public function index()
    {
        $admins = Admin::all();
        return response()->json($admins);
    }


    public function show($id)
    {
        $admin = Admin::findOrFail($id);
        return response()->json($admin);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'email' => 'required|email|unique:admins',
            'password' => 'required|string|',
        ]);

        $admin = new Admin();
        $admin->nom = $request->nom;
        $admin->email = $request->email;
        $admin->password = Hash::make($request->password);
        $admin->save();

        return response()->json($admin, 201);
    }

    public function update(Request $request, $id)
    {
        $admin = Admin::findOrFail($id);
        $admin->update($request->all());
        return response()->json($admin, 200);
    }

    
    public function destroy($id)
    {
        $admin = Admin::findOrFail($id);
        $admin->delete();
        return response()->json(null, 204);
    }



    public function listeClients()
    {
        $clients = Client::with('commandes.produits')->get();

        return response()->json($clients);
    }

}
