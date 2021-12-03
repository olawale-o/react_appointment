import { AUTH_FAIL, AUTH_LOADING, AUTH_SUCCESS } from './action_types';
import { login, register } from '../../services';

export const login = (credentials) => (
  async function login(dispatch) {
    dispatch({ type: AUTH_LOADING });
    try {
      const response = await login(credentials);
      dispatch({ type: AUTH_SUCCESS, payload: response });
    } catch (error) {
      console.log('error', error);
      dispatch({ type: AUTH_FAIL, payload: error });
    }
  }
);
export const register = (credentials) => (
  async function register(dispatch) {
    dispatch({ type: AUTH_LOADING });
    try {
      const response = await register(credentials);
      dispatch({ type: AUTH_SUCCESS, payload: response });
    } catch (error) {
      console.log('error', error);
      dispatch({ type: AUTH_FAIL, payload: error });
    }
  }
);