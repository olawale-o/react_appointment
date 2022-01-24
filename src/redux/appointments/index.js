import {
  ALL_APPOINTMENTS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  APPOINTMENT_DELETE,
} from './action_types';

const initialState = {
  allAppointmentIds: [],
  appointmentById: null,
  loading: false,
  error: null,
  message: null,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_APPOINTMENTS:
      return {
        allAppointmentIds: action.payload.allAppointmentIds,
        appointmentById: action.payload.appointmentById,
        loading: false,
        error: null,
        message: null,
      };
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case REQUEST_SUCCESS:
      return { ...state, message: action.payload, loading: false };
    case APPOINTMENT_DELETE: {
      const { id, message } = action.payload;
      const { allAppointmentIds, appointmentById } = state;
      delete appointmentById[id];
      return {
        allAppointmentIds: allAppointmentIds.filter((appointmentId) => appointmentId !== id),
        appointmentById,
        message,
        loading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default appointmentReducer;
