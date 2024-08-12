<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    use HasFactory;

    public function body_part()
    {
        return $this->belongsTo(BodyPart::class);
    }

    public function routines()
    {
        return $this->belongsToMany(Routine::class, 'routine_exercises');
    }
}
