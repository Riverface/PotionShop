import deletingPotionReducer from '../../reducers/deleting-potion-reducer';

describe("deletingPotionReducer", () => {

    test('Should toggle deleting form visibility to true', () => {
        expect(deletingPotionReducer(false, { type: 'DELETING_POTION' })).toEqual(true);
    });
});