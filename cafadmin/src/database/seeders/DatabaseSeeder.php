<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Daniel Lucumi', // Puedes cambiar el nombre si lo deseas
            'email' => 'dflm25@gmail.com',
            'password' => Hash::make('123456'), // Asegúrate de hashear la contraseña
        ]);
    }
}
