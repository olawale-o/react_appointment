import { AUTH_FAIL, AUTH_LOADING, AUTH_SUCCESS } from './action_types';
import { loginService, logoutService, registerService } from '../../services';

export const login = (credentials) => (
  async function login(dispatch) {
    dispatch({ type: AUTH_LOADING });
    try {
      const response = await loginService(credentials);
      dispatch({ type: AUTH_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: AUTH_FAIL, payload: error.message });
    }
  }
);
export const register = (credentials) => (
  async function register(dispatch) {
    dispatch({ type: AUTH_LOADING });
    try {
      const response = await registerService(credentials);
      dispatch({ type: AUTH_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: AUTH_FAIL, payload: error.message });
    }
  }
);

export const logout = () => (
  async function logout(dispatch) {
    dispatch({ type: AUTH_LOADING });
    try {
      await logoutService();
      dispatch({ type: AUTH_SUCCESS, payload: null });
    } catch (error) {
      dispatch({ type: AUTH_FAIL, payload: error.message });
    }
  }
);
