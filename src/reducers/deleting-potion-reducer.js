import * as c from '../actions/ActionTypes';

export default (state = false, action) => {
    switch (action.type) {
        case c.DELETING_POTION:
            return !state;
        default:
            return state;
    }
};
