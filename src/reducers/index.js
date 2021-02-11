import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';
import masterPotionList from './master-potion-list';

const rootReducer = combineReducers({
  masterPotionList: masterPotionListReducer,
  CRUDEPhase: 0,
  debtCredit: 0
});

export default rootReducer;