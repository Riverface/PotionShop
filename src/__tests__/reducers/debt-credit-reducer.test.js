import debtCreditReducer from '../../reducers/editing-potion-reducer';

describe("debtCreditReducer", () => {
    test('Should toggle form visibility state to true', () => {
        expect(debtCreditReducer(0, { type: 'UPDATE_ACCOUNT'})).toEqual(0);
        expect()
    });
    test('Should add 1 to debt', () => {
        expect(debtCreditReducer(1, { type: 'UPDATE_ACCOUNT'})).toEqual(1);
        expect()
    });
});