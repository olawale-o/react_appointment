import { AUTH_LOADING, AUTH_SUCCESS } from "./action_types";

const initialState = {
  isLoading: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {  ...state, user: action.payload, isLoading: false };
    case AUTH_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default authReducer;
