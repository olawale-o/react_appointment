import {
  ALL_DOCTORS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  SINGLE_DOCTOR,
  DELETE_DOCTOR,
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
      return { ...state, doctors: action.payload.doctors, loading: false };
    case SINGLE_DOCTOR:
      return { ...state, doctor: action.payload, loading: false };
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_DOCTOR: {
      const { id, message } = action.payload;
      const { doctors } = state;
      const newDoctors = doctors.filter((doctor) => doctor.id !== id);
      return {
        ...state,
        doctors: newDoctors,
        message,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default doctorReducer;
