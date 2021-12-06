import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL } from './action_types';

export const authLoading = () => ({ type: AUTH_LOADING });
export const authSuccess = (payload) => ({ type: AUTH_SUCCESS, payload });
export const authError = (payload) => ({ type: AUTH_FAIL, payload });
