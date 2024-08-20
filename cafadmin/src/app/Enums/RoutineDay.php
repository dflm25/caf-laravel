<?php

namespace App\Enums;

use Filament\Support\Contracts\HasLabel;

enum RoutineDay: string implements HasLabel
{
    case Lunes = 'Lunes';
    case Martes = 'Martes';
    case Miercoles = 'Miercoles';
    case Jueves = 'Jueves';
    case Viernes = 'Viernes';
    case Sabado = 'Sabado';
    case Domingo = 'Domingo';

    public function getLabel(): ?string
    {
        return match ($this) {
            self::Lunes => 'Lunes',
            self::Martes => 'Martes',
            self::Miercoles => 'Miercoles',
            self::Jueves => 'Jueves',
            self::Viernes => 'Viernes',
            self::Sabado => 'Sabado',
            self::Domingo => 'Domingo',
        };
    }
}
