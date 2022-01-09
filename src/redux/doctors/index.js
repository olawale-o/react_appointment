import {
  ALL_DOCTORS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  SINGLE_DOCTOR,
  DELETE_DOCTOR,
} from './action_types';

const initialState = {
  allDoctorIds: [],
  doctorById: null,
  loading: false,
  error: null,
  message: null,
};

const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DOCTORS: {
      return {
        ...state,
        allDoctorIds: action.payload.allDoctorIds,
        doctorById: action.payload.doctorById,
        loading: false,
      };
    }
    case SINGLE_DOCTOR: {
      const doctor = action.payload;
      return {
        doctorById: { ...state.doctorById, [doctor.id]: doctor },
        allDoctorIds: state.allDoctorIds.concat([doctor.id]),
        loading: false,
        message: null,
        error: null,
      };
    }
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_DOCTOR: {
      const { id, message } = action.payload;
      const { allDoctorIds, doctorById } = state;
      delete doctorById[id];
      return {
        allDoctorIds: allDoctorIds.filter((doctorId) => doctorId !== id),
        doctorById,
        message,
        loading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default doctorReducer;
