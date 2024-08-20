<?php

namespace App\Filament\Resources\RoutineExerciseResource\Pages;

use App\Filament\Resources\RoutineExerciseResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditRoutineExercise extends EditRecord
{
    protected static string $resource = RoutineExerciseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
