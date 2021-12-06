import { AUTH_LOADING, AUTH_SUCCESS, AUTH_FAIL } from './action_types';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, user: action.payload, isLoading: false };
    case AUTH_LOADING:
      return { ...state, isLoading: true };
    case AUTH_FAIL:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default authReducer;
