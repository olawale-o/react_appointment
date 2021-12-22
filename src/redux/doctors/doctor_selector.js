export const selectDoctors = (state) => state.doctors.allDoctorIds;
export const selectDoctorById = (id) => (state) => state.doctors.doctorById[id];
export const selectLoading = (state) => state.doctors.loading;
