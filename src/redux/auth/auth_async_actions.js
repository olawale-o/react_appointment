import { authError, authLoading, authSuccess } from './action_creators';
import { loginService, logoutService, registerService } from '../../services';

export const login = (credentials) => (
  async function login(dispatch) {
    dispatch(authLoading());
    try {
      const response = await loginService(credentials);
      dispatch(authSuccess(response));
    } catch (error) {
      dispatch(authError(error.message));
    }
  }
);
export const register = (credentials) => (
  async function register(dispatch) {
    dispatch(authLoading());
    try {
      const response = await registerService(credentials);
      dispatch(authSuccess(response));
    } catch (error) {
      dispatch(authError(error.message));
    }
  }
);

export const logout = () => (
  async function logout(dispatch) {
    dispatch(authLoading());
    try {
      await logoutService();
      dispatch(authSuccess(null));
    } catch (error) {
      dispatch(authError(error.message));
    }
  }
);
