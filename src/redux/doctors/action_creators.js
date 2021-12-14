import {
  ALL_DOCTORS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  SINGLE_DOCTOR,
  DELETE_DOCTOR,
} from './action_types';

export const loading = () => ({ type: REQUEST_LOADING });
export const allDoctors = (payload) => ({ type: ALL_DOCTORS, payload });
export const singleDoctor = (payload) => ({ type: SINGLE_DOCTOR, payload });
export const error = (payload) => ({ type: REQUEST_FAILURE, payload });
export const doctorDelete = (payload) => ({ type: DELETE_DOCTOR, payload });
