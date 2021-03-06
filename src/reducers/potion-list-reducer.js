import * as c from './../actions/ActionTypes';

import potionAll from '../assets/potionAll';

export default (state = potionAll, action) => {
  const { title, attName, attMod, flavorText, volume, id, costByVolume, restockRate } = action;

  switch (action.type) {
    case c.ADD_POTION:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          attName: attName,
          attMod: attMod,
          flavorText: flavorText,
          volume: parseInt(volume),
          id: id,
          costByVolume: costByVolume,
          restockRate: parseInt(restockRate)
        }
      });
    case c.DELETE_POTION:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.UPDATE_STOCK:
      const newPotion = Object.assign({}, state[id], { volume });
      const updatedState = Object.assign({}, state, {
        [id]: newPotion
      });
      return updatedState;
    default:
      return state;
  }
};
