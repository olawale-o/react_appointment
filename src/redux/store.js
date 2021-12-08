import { createStore, combineReducers } from 'redux';
import authReducer from './auth';
import doctorReducer from './doctors';
import composedEnhancers from './enhancers';

const reducer = combineReducers({
  auth: authReducer,
  doctors: doctorReducer,
});
const store = createStore(reducer, composedEnhancers);

export default store;
