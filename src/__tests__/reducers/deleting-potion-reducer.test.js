import deletingPotionReducer from '../../reducers/deleting-potion-reducer';

describe("deletingPotionReducer", () => {

    test('Should toggle form visibility state to true', () => {
        expect(deletingPotionReducer(false, { type: 'DELETING_POTION' })).toEqual(true);
    });

});