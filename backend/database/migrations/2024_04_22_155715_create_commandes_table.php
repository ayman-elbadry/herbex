<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commandes', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('client_id');
                $table->decimal('montant_total', 10, 2);
                $table->string('statut')->default('en attente');
                $table->string('adresse_livraison')->nullable();
                $table->decimal('frais_livraison', 10, 2)->nullable();
                $table->timestamps();
    
                $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
            });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
