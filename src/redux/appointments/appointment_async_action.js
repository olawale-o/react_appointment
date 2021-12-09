import { createAppointmentService, getAppointmentsService } from '../../services';
import {
  allAppointments,
  failure,
  loading,
  success,
} from './action_creators';

export const createAppointment = (appointment) => (
  async function createAppointment(dispatch) {
    dispatch(loading());
    try {
      await createAppointmentService(appointment);
      dispatch(success('appointment created'));
    } catch (error) {
      dispatch(failure(error.message));
    }
  }
);

export const getAppointments = () => (
  async function getAppointments(dispatch) {
    dispatch(loading());
    try {
      const { data: { appointments } } = await getAppointmentsService();
      dispatch(allAppointments(appointments));
    } catch (error) {
      dispatch(failure(error.message));
    }
  }
);