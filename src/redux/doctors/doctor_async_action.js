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
} from './action_creators';

export const getDoctors = () => (
  async function getDoctors(dispatch) {
    dispatch(loading());
    try {
      const response = await getDoctorsService();
      dispatch(allDoctors(response.data));
    } catch (error) {
      dispatch(error(error.message));
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
      dispatch(error(error.message));
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
      dispatch(error(error.message));
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
      dispatch(error(error.message));
    }
  }
);
