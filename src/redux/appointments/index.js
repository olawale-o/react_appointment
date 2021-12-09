import {
  ALL_APPOINTMENTS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  REQUEST_SUCCESS,
} from './action_types';

const initialState = {
  appoinntments: [],
  loading: false,
  error: null,
  message: null,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_APPOINTMENTS:
      return { ...state, appoinntments: action.payload, loading: false };
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case REQUEST_SUCCESS:
      return { ...state, message: action.payload, loading: false };
    default:
      return state;
  }
};

export default appointmentReducer;
