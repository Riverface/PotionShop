import { combineReducers } from 'redux';
import debtCreditReducer from './debt-credit-reducer';
import formVisibleReducer from './form-visible-reducer';
import masterPotionAllReducer from './potion-list-reducer';

const rootReducer = combineReducers({
  masterPotionAll: masterPotionAllReducer,
  debtCredit: debtCreditReducer,
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;