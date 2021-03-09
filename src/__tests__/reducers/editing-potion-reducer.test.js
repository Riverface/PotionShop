import editingPotionReducer from '../../reducers/editing-potion-reducer';

describe("editingPotionReducer", () => {

    test('Should toggle form visibility state to true', () => {
        expect(editingPotionReducer(false, { type: 'EDITING_POTION' })).toEqual(true);
    });

});