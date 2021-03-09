import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
    // console.log("Toggling form visible state");
    switch (action.type) {
        case c.SELECT_POTION:
            return action.selectedPotion;
        default:
            return state;
    }
};
