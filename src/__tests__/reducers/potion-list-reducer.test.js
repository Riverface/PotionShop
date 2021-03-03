import * as c from '../../actions/ActionTypes';

import Moment from 'moment';
import defaultList from "./../../assets/potionAll.json";
import potionAllReducer from '../../reducers/potion-list-reducer';

describe('potionAllReducer', () => {
  let action;
  beforeEach(() => {
  });

  const currentState = {
    1: {
      attMod: "+666",
      attName: "Strength",
      costByVolume: 150,
      flavorText: "POWER OVERWHELMING",
      id: "1",
      measurement: "ml",
      restockRate: 20,
      title: "Potion of mitochondrial awakening",
      volume: 100
    },
    2: {
      attMod: "+5",
      attName: "Dexterity",
      costByVolume: 200,
      flavorText: "It's all about finger strength, baby.",
      id: "2",
      measurement: "ml",
      restockRate: 20,
      title: "Potion of Finger Strength",
      volume: 100
    }
  }

  const potionData = {
    attMod: "+5/-5",
    attName: "Vitality/Dexterity",
    costByVolume: 250,
    flavorText: "OUCH. Gimme another!",
    id: "3",
    measurement: "ml",
    restockRate: 20,
    title: "Potion of Masochism",
    volume: 100
  };

  test('Should return default state if no action type is recognized', () => {
    expect(potionAllReducer(defaultList, { type: null })).toMatchObject(defaultList);
  });

  test('Should successfully add new potion data to masterPotionAll', () => {
    const { title, attName, attMod, flavorText, volume, id, costByVolume, restockRate } = potionData;
    action = {
      type: 'ADD_POTION',
      title: title,
      attName: attName,
      attMod: attMod,
      flavorText: flavorText,
      volume: parseInt(volume),
      id: id,
      costByVolume: costByVolume,
      restockRate: parseInt(restockRate)
    };
    expect(potionAllReducer({}, action)).toMatchObject({
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
  });

  test('Should successfully delete a potion', () => {
    action = {
      type: 'DELETE_POTION',
      id: 2
    };
    expect(potionAllReducer(currentState, action)).toMatchObject({
      1: {
        attMod: "+666",
        attName: "Strength",
        costByVolume: 150,
        flavorText: "POWER OVERWHELMING",
        id: "1",
        measurement: "ml",
        restockRate: 20,
        title: "Potion of mitochondrial awakening",
        volume: 100
      }
    });
  });
  test('Should add volume to a potion', () => {
    const { title, attName, attMod, flavorText, volume, id, costByVolume, restockRate } = potionData;
    action = {
      type: c.UPDATE_STOCK,
      id: id,
      volume: volume
    };
    expect(potionAllReducer({ [id]: potionData }, action)).toMatchObject({
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
  });
});