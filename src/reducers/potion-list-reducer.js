import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { title, attName, attMod, flavorText, volume, id, costByVolume, restockRate } = action;
  switch (action.type) {
    case c.ADD_POTION:
      return Object.assign({}, state, {
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
