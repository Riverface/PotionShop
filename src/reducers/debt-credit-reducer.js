import * as c from './../actions/ActionTypes';

export default (state = 0, action) => {
    // console.log("adding/subtracting debt");
    switch (action.type) {
        case c.UPDATE_ACCOUNT:
            const newState = state + action.price;
            return newState;
        default:
            return state;
    }
};
