import { journalSlice, savingNewNote } from '../../../store/journal/journalSlice';
import { initialState } from '../../fixtures/authFixtures';

describe('Pruebas en journalSlice', () => {
    test('retornar estado inicial y llamarse journal', () => {
        expect(journalSlice.name).toBe('journal');
        const state = journalSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('debe guardar la nueva nota', () => {
        const state = journalSlice.reducer(initialState, savingNewNote());
        console.log(state);
        expect(state.isSaving).toBe(true);
    });
});
