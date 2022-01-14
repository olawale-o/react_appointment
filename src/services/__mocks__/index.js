export const loginService = async () => Promise.resolve({ id: 1, email: 'test@test.com', token: 'token' });

export const registerService = async () => Promise.resolve({ id: 1, email: 'test@test.com', token: 'token' });

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
