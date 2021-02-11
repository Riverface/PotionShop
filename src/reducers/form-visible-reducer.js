import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  console.log("Toggling form visible state");
  switch (action.type) {
    case c.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
};
