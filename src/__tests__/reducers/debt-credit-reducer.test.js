import debtCreditReducer from '../../reducers/debt-credit-reducer';

describe("debtCreditReducer", () => {
    test('Nothing happens on default', () => {
        expect(debtCreditReducer(0, { type: null})).toEqual(0);
    });
    test('Adds to it', () => {
        expect(debtCreditReducer(0, { type: "UPDATE_ACCOUNT", debtCredit:1} )).toEqual(1);
    });
    test('Subtracts from it', () => {
        expect(debtCreditReducer(0, { type: "UPDATE_ACCOUNT",debtCredit:-1} )).toEqual(-1);
    });
    
});