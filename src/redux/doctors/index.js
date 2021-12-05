import {
  ALL_DOCTORS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  SINGLE_DOCTOR,
} from './action_types';

const initialState = {
  doctors: [],
  doctor: null,
  loading: false,
  error: null,
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOCTORS:
      return { ...state, doctors: action.payload, loading: false };
    case SINGLE_DOCTOR:
      return { ...state, doctor: action.payload, loading: false };
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default doctorReducer;
