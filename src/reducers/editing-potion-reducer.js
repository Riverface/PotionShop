import * as c from '../actions/ActionTypes';

export default (state = false, action) => {
    switch (action.type) {
        case c.EDITING_POTION:
            return !state;
        default:
            return state;
    }
};
