import authReducer from '../redux/auth';
import { authLoading, authSuccess, authError } from '../redux/auth/action_creators';

describe('Auth Reducer', () => {
  const initialState = {
    isLoading: false,
    user: null,
    error: null,
  };
  test('Should return the initialstate', () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('Should handle loading state', () => {
    initialState.isLoading = false;
    const newState = authReducer(initialState, authLoading());
    expect(newState).toEqual({ ...initialState, isLoading: true });
  });

  test('Should handle success state', () => {
    initialState.isLoading = false;
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@test.com',
    };
    const newState = authReducer(initialState, authSuccess(user));
    expect(newState).toEqual({ ...initialState, isLoading: false, user });
  });

  test('Should handle error state', () => {
    const error = {
      message: 'Error message',
    };
    const newState = authReducer(initialState, authError(error));
    expect(newState).toEqual({ ...initialState, isLoading: false, error });
  });
});
