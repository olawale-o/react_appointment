import appointmentReducer from '../redux/appointments';
import {
  loading,
  failure,
  allAppointments,
  deleteAppointment,
} from '../redux/appointments/action_creators';

describe('Appointment reducer', () => {
  const initialState = {
    allAppointmentIds: [],
    appointmentById: null,
    loading: false,
    error: null,
    message: null,
  };
  test('Should return the initial state', () => {
    const newState = appointmentReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('Should handle loading state', () => {
    const newState = appointmentReducer(initialState, loading());
    expect(newState).toEqual({ ...initialState, loading: true });
  });

  test('Should handle failure state', () => {
    const error = {
      message: 'Error message',
    };
    const newState = appointmentReducer(initialState, failure(error));
    expect(newState).toEqual({ ...initialState, loading: false, error });
  });

  test('Should handle allAppointments state', () => {
    const allAppointmentIds = [1, 2];
    const appointmentById = {
      1: {
        id: 1,
        date: '2020-05-01',
        time: '10:00',
        doctor_id: 1,
        patient_id: 1,
      },
      2: {
        id: 2,
        date: '2020-05-01',
        time: '10:00',
        doctor_id: 1,
        patient_id: 1,
      },
    };
    const payload = { allAppointmentIds, appointmentById };
    const newState = appointmentReducer(initialState, allAppointments(payload));
    expect(newState).toEqual({
      allAppointmentIds,
      appointmentById,
      loading: false,
      message: null,
      error: null,
    });
  });

  test('Should handle deleteAppointment state', () => {
    initialState.allAppointmentIds = [1, 2];
    initialState.appointmentById = {
      1: {
        id: 1,
        date: '2020-05-01',
        time: '10:00',
        doctor_id: 1,
        patient_id: 1,
      },
      2: {
        id: 2,
        date: '2020-05-01',
        time: '10:00',
        doctor_id: 1,
        patient_id: 1,
      },
    };
    const id = 1;
    const message = 'Appointment deleted';
    const newState = appointmentReducer(initialState, deleteAppointment({ id, message }));
    expect(newState).toEqual({
      allAppointmentIds: [2],
      appointmentById: { 2: initialState.appointmentById[2] },
      loading: false,
      message,
      error: null,
    });
  });
});
