import { createStore, combineReducers } from 'redux';
import authReducer from './auth';
import composedEnhancers from './enhancers';

const reducer = combineReducers({ auth: authReducer });
const store = createStore(reducer, composedEnhancers);

export default store;
