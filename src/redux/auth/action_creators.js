import {
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
} from './action_types';

export const authLoading = () => ({ type: AUTH_LOADING });
export const authSuccess = (payload) => ({ type: AUTH_SUCCESS, payload });
export const authError = (payload) => ({ type: AUTH_FAIL, payload });
export const authLogout = () => ({ type: AUTH_LOGOUT });
