export const selectAppointments = (state) => state.appointments.allAppointmentIds;
export const selectAppointmentsById = (id) => (state) => state.appointments.appointmentById[id];
export const selectAppointmentsLoading = (state) => state.appointments.loading;
export const selectAppointmentsMessage = (state) => state.appointments.message;
