import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from './logger';

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const enhancers = applyMiddleware(...middlewares);
const composedEnhancers = compose(enhancers);

export default composedEnhancers;
