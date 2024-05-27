<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\CommandeProduitController;

Route::post('/register', [RegisteredUserController::class, 'store']);
Route::post('/forgot-password', [PasswordResetLinkController::class, 'store']);
Route::post('/reset-password', [NewPasswordController::class, 'store']);
Route::get('/verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])->name('verification.verify');
Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])->middleware('auth:sanctum');


Route::apiResource('admins', AdminController::class);



// Authentification client

Route::post('/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->middleware('auth:client');

// Authentification admin
Route::post('/admin/login', [AuthenticatedSessionController::class, 'store']);
Route::post('/admin/logout', [AuthenticatedSessionController::class, 'destroy'])->middleware('auth:admin');

Route::apiResource('categories', CategoryController::class);
Route::apiResource('clients', ClientController::class);
Route::apiResource('commandes', CommandeController::class);
Route::apiResource('produits', ProduitController::class);



// Routes pour gérer les produits d'une commande
Route::post('/commandes/{commande_id}/produits', [CommandeProduitController::class, 'ajouterProduit']);
Route::put('/commandes/{commande_id}/produits/{produit_id}', [CommandeProduitController::class, 'modifierProduit']);
Route::delete('/commandes/{commande_id}/produits/{produit_id}', [CommandeProduitController::class, 'supprimerProduit']);

Route::get('/admin/clients', [AdminController::class,'listeClients']);
