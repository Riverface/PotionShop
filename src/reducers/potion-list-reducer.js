import * as c from './../actions/ActionTypes';

import potionAll from '../assets/potionAll';

// import { v4 } from 'uuid'

export default (state = potionAll, action) => {
  const { title, attName, attMod, flavorText, volume, id, costByVolume, restockRate } = action;
  
  switch (action.type) {
    case c.ADD_POTION:
      console.log(state); //this should log the state anytime the reducer is called to show us when it's changing
      return Object.assign({}, state, {     // this needs to be an array
        [id]: {
          title: title,
          attName: attName,
          attMod: attMod,
          flavorText: flavorText,
          volume: volume,
          id: id,
          costByVolume: costByVolume,
          restockRate: restockRate
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
