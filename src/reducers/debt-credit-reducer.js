import * as c from './../actions/ActionTypes';

export default (state = 0, action) => {
    switch (action.type) {
        case c.UPDATE_ACCOUNT:
            const newState = state + action.debtCredit;
            return newState;
        default:
            return state;
    }
};