import {
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  ALL_APPOINTMENTS,
  APPOINTMENT_DELETE,
} from './action_types';

export const loading = () => ({ type: REQUEST_LOADING });
export const success = (payload) => ({ type: REQUEST_SUCCESS, payload });
export const failure = (payload) => ({ type: REQUEST_FAILURE, payload });
export const allAppointments = (payload) => ({ type: ALL_APPOINTMENTS, payload });
export const deleteAppointment = (payload) => ({ type: APPOINTMENT_DELETE, payload });
