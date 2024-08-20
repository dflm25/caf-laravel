<?php

namespace App\Filament\Resources\RoutineExerciseResource\Pages;

use App\Filament\Resources\RoutineExerciseResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRoutineExercises extends ListRecords
{
    protected static string $resource = RoutineExerciseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
