import * as c from './../actions/ActionTypes';

import { v4 } from 'uuid';

export default (state = {}, action) => {
  const { title, attName, attMod, flavorText, volume, id, costByVolume } = action;
  switch (action.type) {
    case c.ADD_POTION:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          attName: attName,
          attMod: attMod,
          flavorText: flavorText,
          volume: volume,
          id: v4(),
          costByVolume: costByVolume
        }
      });
    case c.DELETE_POTION:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_TIME: 
      const newPotion = Object.assign({}, state[id], { volume });
      const updatedState = Object.assign({}, state, {
        [id]: newPotion
      });
      return updatedState;
    default:
      return state;
  }
};
