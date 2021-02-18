import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import potionAllReducer from '../../reducers/potion-list-reducer';
import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

    let store = createStore(rootReducer);
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPotionAll: {},
      formVisibleOnPage: false
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
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterPotionAll).toEqual(potionAllReducer({}, action));
  });
  
  test('Check that TOGGLE_FORM action works for both formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(false, action));
  });
}); 
