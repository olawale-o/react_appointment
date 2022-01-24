import doctorReducer from '../redux/doctors';
import {
  loading,
  allDoctors,
  singleDoctor,
  doctorDelete,
} from '../redux/doctors/action_creators';

describe('Doctor reducer', () => {
  const initialState = {
    allDoctorIds: [],
    doctorById: null,
    loading: false,
    error: null,
    message: null,
  };

  test('should return initialstate', () => {
    const newState = doctorReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('should handle loading state', () => {
    const newState = doctorReducer(initialState, loading());
    expect(newState).toEqual({ ...initialState, loading: true });
  });

  test('should handle allDoctors state', () => {
    const allDoctorIds = [1, 2];
    const doctorById = {
      1: {
        id: 1,
        fullname: 'John Doe',
        specialty: 'Cardiology',
        city: 'New York',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322968.php&psig=AOvVaw3Z_q-_X-_7_X-_7_X-_7&ust=1589788240580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi-_4-q-kCFQAAAAAdAAAAABAD',
        user_id: 1,
      },
      2: {
        id: 1,
        fullname: 'Jane Doe',
        specialty: 'Cardiology',
        city: 'New York',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322968.php&psig=AOvVaw3Z_q-_X-_7_X-_7_X-_7&ust=1589788240580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi-_4-q-kCFQAAAAAdAAAAABAD',
        user_id: 2,
      },
    };
    const payload = { allDoctorIds, doctorById };
    const newState = doctorReducer(initialState, allDoctors(payload));
    expect(newState).toEqual({ ...initialState, allDoctorIds, doctorById });
  });

  test('should handle singleDoctor state', () => {
    const payload = {
      id: 1,
      fullname: 'Titi Doe',
      specialty: 'Cardiology',
      city: 'New York',
      picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322968.php&psig=AOvVaw3Z_q-_X-_7_X-_7_X-_7&ust=1589788240580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi-_4-q-kCFQAAAAAdAAAAABAD',
      user_id: 1,
    };
    const newState = doctorReducer(initialState, singleDoctor(payload));
    expect(newState).toEqual({
      allDoctorIds: [1],
      doctorById: { [payload.id]: payload },
      loading: false,
      error: null,
      message: null,
    });
  });
  test('should handle doctorDelete state', () => {
    initialState.allDoctorIds = [1, 2];
    initialState.doctorById = {
      1: {
        id: 1,
        fullname: 'John Doe',
        specialty: 'Cardiology',
        city: 'New York',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322968.php&psig=AOvVaw3Z_q-_X-_7_X-_7_X-_7&ust=1589788240580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi-_4-q-kCFQAAAAAdAAAAABAD',
        user_id: 1,
      },
      2: {
        id: 1,
        fullname: 'Jane Doe',
        specialty: 'Cardiology',
        city: 'New York',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322968.php&psig=AOvVaw3Z_q-_X-_7_X-_7_X-_7&ust=1589788240580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi-_4-q-kCFQAAAAAdAAAAABAD',
        user_id: 2,
      },
    };
    const doctorById = {
      2: {
        id: 1,
        fullname: 'Jane Doe',
        specialty: 'Cardiology',
        city: 'New York',
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322968.php&psig=AOvVaw3Z_q-_X-_7_X-_7_X-_7&ust=1589788240580000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi-_4-q-kCFQAAAAAdAAAAABAD',
        user_id: 2,
      },
    };
    const message = 'Doctor deleted successfully';
    const payload = { id: 1, message };
    const newState = doctorReducer(initialState, doctorDelete(payload));
    expect(newState).toEqual({
      allDoctorIds: [2],
      doctorById,
      loading: false,
      message,
      error: null,
    });
  });
});
