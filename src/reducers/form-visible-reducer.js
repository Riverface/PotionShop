import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_FORM:
      console.log("Toggling form visible state");
      return !state;
    default:
      return state;
  }
};
