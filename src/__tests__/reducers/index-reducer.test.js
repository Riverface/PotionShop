import { createStore } from 'redux';
import defaultList from "./../../assets/potionAll.json";
import formVisibleReducer from '../../reducers/form-visible-reducer';
import potionAllReducer from '../../reducers/potion-list-reducer';
import rootReducer from '../../reducers/index';

describe("rootReducer", () => {
  let store = createStore(rootReducer);
  beforeEach(() => {

  });

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toMatchObject({
      masterPotionAll: defaultList,
      formVisibleOnPage: false,
      deletingPotion: false,
      editingPotion: false,
      selectedPotion: null
    });
  });
  test('Check that initial state of potionAllReducer matches root reducer', () => {
    expect(store.getState().masterPotionAll).toEqual(potionAllReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  test('Check that ADD_POTION action works for both potionAllReducer and root reducer', () => {
    const action = {
      type: 'ADD_POTION',
      attMod: "-2",
      attName: "Strength",
      costByVolume: 100,
      flavorText: "I was born with glass bones and paper skin. Would you like to buy some chocolate?",
      id: "4",
      measurement: "ml",
      restockRate: 20,
      title: "Potion of Feebleness",
      volume: 100
    }

    store.dispatch(action);
    expect(store.getState().masterPotionAll).toMatchObject(potionAllReducer({}, action));
  });

  test('Check that TOGGLE_FORM action works for both formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(false, action));
  });
});
