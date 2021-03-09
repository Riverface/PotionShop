import { combineReducers } from 'redux';
import debtCreditReducer from './debt-credit-reducer';
import deletingPotionReducer from './deleting-potion-reducer';
import editingPotionReducer from './editing-potion-reducer';
import formVisibleReducer from './form-visible-reducer';
import masterPotionAllReducer from './potion-list-reducer';
import selectedPotionReducer from './selected-potion-reducer';

const rootReducer = combineReducers({
  masterPotionAll: masterPotionAllReducer,
  debtCredit: debtCreditReducer,
  formVisibleOnPage: formVisibleReducer,
  deletingPotion: deletingPotionReducer,
  editingPotion: editingPotionReducer,
  selectedPotion: selectedPotionReducer
});

export default rootReducer;