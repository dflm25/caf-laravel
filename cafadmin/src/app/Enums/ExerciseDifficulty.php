<?php

namespace App\Enums;

use Filament\Support\Contracts\HasLabel;

enum ExerciseDifficulty: string implements HasLabel
{
    case Facil = 'fácil';
    case Medio = 'medio';
    case Dificil = 'difícil';

    public function getLabel(): ?string
    {
        return match ($this) {
            self::Facil => 'Facil',
            self::Medio => 'Medio',
            self::Dificil => 'Dificil',
        };
    }
}
