import { combineReducers } from 'redux';
import formVisibleReducer from './form-visible-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterPotionList: masterPotionReducer
});

export default rootReducer;