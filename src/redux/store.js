import { createStore, combineReducers } from 'redux';
import authReducer from './auth';
import doctorReducer from './doctors';
import appointmentReducer from './appointments';
import composedEnhancers from './enhancers';

const reducer = combineReducers({
  auth: authReducer,
  doctors: doctorReducer,
  appointments: appointmentReducer,
});
const store = createStore(reducer, composedEnhancers);

export default store;
