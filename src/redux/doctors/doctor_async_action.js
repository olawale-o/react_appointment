import {
  getDoctorsService,
  getDoctorService,
  addDoctorService,
} from '../../services';
import {
  ALL_DOCTORS,
  REQUEST_FAILURE,
  REQUEST_LOADING,
  SINGLE_DOCTOR,
} from './action_types';

export const getDoctors = () => (
  async function getDoctors(dispatch) {
    dispatch({ type: REQUEST_LOADING });
    try {
      const response = await getDoctorsService();
      dispatch({ type: ALL_DOCTORS, payload: response.data });
    } catch (error) {
      dispatch({ type: REQUEST_FAILURE, payload: error });
    }
  }
);

export const getDoctor = (id) => (
  async function getDoctor(dispatch) {
    dispatch({ type: REQUEST_LOADING });
    try {
      const response = await getDoctorService(id);
      dispatch({ type: SINGLE_DOCTOR, payload: response.data });
    } catch (error) {
      dispatch({ type: REQUEST_FAILURE, payload: error });
    }
  }
);

export const addDoctor = (newDoctor, cb) => (
  async function addDoctor(dispatch) {
    dispatch({ type: REQUEST_LOADING });
    try {
      const { data: { doctor } } = await addDoctorService(newDoctor);
      dispatch({ type: SINGLE_DOCTOR, payload: doctor });
      cb(doctor.id);
    } catch (error) {
      dispatch({ type: REQUEST_FAILURE, payload: error });
    }
  }
);
