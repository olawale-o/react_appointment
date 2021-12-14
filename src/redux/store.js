import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth';
import doctorReducer from './doctors';
import appointmentReducer from './appointments';
import composedEnhancers from './enhancers';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth: authReducer,
  doctors: doctorReducer,
  appointments: appointmentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, composedEnhancers);
const persistor = persistStore(store);

export { store, persistor };
