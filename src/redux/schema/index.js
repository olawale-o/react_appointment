import { normalize, schema } from 'normalizr';

const doctorSchema = new schema.Entity('doctors');
const doctorListSchema = [doctorSchema];

const normalizedDoctors = (data) => {
  const doctorList = data.doctors;
  const { entities: { doctors }, result } = normalize(doctorList, doctorListSchema);
  return { allDoctorIds: result, doctorById: doctors };
};

export default normalizedDoctors;
