<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => ['required', 'string', 'max:205'],
            'email' => ['required', 'string', 'email', 'max:200', 'unique:clients'], // Modifiez 'users' par 'clients'
            'password' => ['required',],
            'address' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'max:255'],
        ]);

        $user = Client::create([
            'nom' => $request->nom,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address' => $request->address,
            'phone' => $request->phone,
        ]);

        if (!$user) {
            return response()->json(['message' => 'Échec de l\'enregistrement du client'], 500);
        }
        // $client = new Client();
        // $client->nom = $request->nom;
        // $client->email = $request->email;
        // $client->password = Hash::make($request->password); // Hacher le mot de passe
        // $client->address=$request->address;
        // $client->phone=$request->phone;
        // $client->save();
        // event(new Registered($user));

        // Auth::login($user);

        return response()->json(['message' => 'client enregistré avec succès']);
    }
}
