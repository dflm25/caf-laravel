<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Daniel Lucumi', // Puedes cambiar el nombre si lo deseas
            'email' => 'dflm25@gmail.com',
            'password' => Hash::make('123456'), // Asegúrate de hashear la contraseña
        ]);
    }
}
