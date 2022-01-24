import { normalize, schema } from 'normalizr';

const doctorSchema = new schema.Entity('doctors');
const doctorListSchema = [doctorSchema];

const appointmentSchema = new schema.Entity('appointments');
const appointmentListSchema = [appointmentSchema];

export const normalizedDoctors = (data) => {
  const doctorList = data.doctors;
  const { entities: { doctors }, result } = normalize(doctorList, doctorListSchema);
  return { allDoctorIds: result, doctorById: doctors };
};

export const normalizedAppointments = (data) => {
  const appointmentList = data.appointments;
  const { entities: { appointments }, result } = normalize(appointmentList, appointmentListSchema);
  return { allAppointmentIds: result, appointmentById: appointments };
};
