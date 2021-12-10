import {
  ALL_APPOINTMENTS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  APPOINTMENT_DELETE,
} from './action_types';

const initialState = {
  appointments: [],
  loading: false,
  error: null,
  message: null,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_APPOINTMENTS:
      return { ...state, appointments: action.payload, loading: false };
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case REQUEST_SUCCESS:
      return { ...state, message: action.payload, loading: false };
    case APPOINTMENT_DELETE: {
      const { id, message } = action.payload;
      const { appointments } = state;
      const newAppointments = appointments.filter((appointment) => appointment.id !== id);
      return {
        ...state,
        appointments: newAppointments,
        message,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default appointmentReducer;
