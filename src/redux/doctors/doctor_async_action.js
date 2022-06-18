import {
  getDoctorsService,
  getDoctorService,
  addDoctorService,
  deleteDoctorService,
} from '../../services';
import {
  loading,
  allDoctors,
  doctorDelete,
  singleDoctor,
  onError,
  doctorToBook,
} from './action_creators';

import { normalizedDoctors } from '../schema';

export const getDoctors = () => (
  async function getDoctors(dispatch) {
    dispatch(loading());
    try {
      const response = await getDoctorsService();
      const payload = normalizedDoctors(response.data);
      dispatch(allDoctors(payload));
    } catch (error) {
      dispatch(onError(error.message));
    }
  }
);

export const getDoctor = (id) => (
  async function getDoctor(dispatch) {
    dispatch(loading());
    try {
      const { data: { doctor } } = await getDoctorService(id);
      dispatch(singleDoctor(doctor));
    } catch (error) {
      dispatch(onError(error.message));
    }
  }
);

export const addDoctor = (newDoctor, cb) => (
  async function addDoctor(dispatch) {
    dispatch(loading());
    try {
      const { data: { doctor } } = await addDoctorService(newDoctor);
      dispatch(singleDoctor(doctor));
      cb(doctor.id);
    } catch (error) {
      dispatch(onError(error.message));
    }
  }
);

export const deleteDoctor = (id) => (
  async function deleteDoctor(dispatch) {
    dispatch(loading());
    try {
      await deleteDoctorService(id);
      dispatch(doctorDelete({ id, message: 'Doctor deleted' }));
    } catch (error) {
      dispatch(onError(error.message));
    }
  }
);

export const onDoctorToBook = (id) => doctorToBook(id);
