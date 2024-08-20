<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RoutineExerciseResource\Pages;
use App\Filament\Resources\RoutineExerciseResource\RelationManagers;
use App\Models\RoutineExercise;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class RoutineExerciseResource extends Resource
{
    protected static ?string $model = RoutineExercise::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('routine_id')
                    ->relationship('routine', 'name') // Assuming the relationship name is
                    ->required(),
                Forms\Components\Select::make('exercise_id')
                    ->relationship('exercise', 'name') // Assuming the relationship name is
                    ->required(),
                Forms\Components\TextInput::make('repetitions')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('times')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('order')
                    ->required()
                    ->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('routine.name')
                    ->label('Routine')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('exercise.name')
                    ->label('Exercise')
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('repetitions')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('times')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('order')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListRoutineExercises::route('/'),
            'create' => Pages\CreateRoutineExercise::route('/create'),
            'edit' => Pages\EditRoutineExercise::route('/{record}/edit'),
        ];
    }
}
