import post from '../api';
const BASE_URI = 'http://localhost:3000/v1';

export const login = (credentials) => {
  const response = await post(`${BASE_URI}/users/login`, credentials);
  return response.json();
};

export const register = (credentials) => {
  const response = await post(`${BASE_URI}/users`, credentials);
  return response.json();
};
