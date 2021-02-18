import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import masterPotionAllReducer from './potion-list-reducer';

const rootReducer = combineReducers({
  masterPotionAll: masterPotionAllReducer,
  debtCredit: 0
});

export default rootReducer;