<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->default("vitex");
            $table->timestamps();
        });

        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->text('description');
            $table->string('images')->nullable();
            $table->decimal('prix', 10, 2);
            $table->decimal('poids_volume', 10, 2);
            $table->unsignedBigInteger('categorie_id'); // Clé étrangère pour la catégorie
            $table->string('taille')->nullable(); // Taille du produit (optionnel)
            $table->string('saveur')->nullable(); // Saveur du produit (optionnel)
            $table->string('concentration')->nullable(); // Concentration du produit (optionnel)
            $table->timestamps();
            $table->foreign('categorie_id')->references('id')->on('categories')->onDelete('cascade');
        });

        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('produit_id');
            $table->integer('quantite');
            $table->timestamps();

            $table->foreign('produit_id')->references('id')->on('produits')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
        Schema::dropIfExists('produits');
        Schema::dropIfExists('stocks');
    }
};
