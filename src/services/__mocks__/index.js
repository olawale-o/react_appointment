/* eslint-disable */

export const loginService = async (_credentials) => Promise.resolve({ id: 1, email: 'test@test.com', token: 'token' });

export const registerService = async (_credentials) => Promise.resolve({ id: 1, email: 'test@test.com', token: 'token' });

/* eslint-enable */

export const getDoctorsService = async () => Promise.resolve({
  data: {
    doctors: [
      {
        id: 1,
        fullname: 'John Doe',
        picture: 'https://placeimg.com/64/64/people',
        specialty: 'Pediatrics',
        user_id: 1,
      },
    ],
  },
});
