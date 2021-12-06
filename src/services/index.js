import { post, get } from '../api';
import { setStorage } from '../scripts/storage';

const BASE_URI = 'http://localhost:3000/v1';

export const loginService = async (credentials) => {
  const response = await post(`${BASE_URI}/users/login`, credentials);
  setStorage(response.headers.get('Authorization').split(' ')[1], 'token');
  return response.json();
};

export const registerService = async (credentials) => {
  const response = await post(`${BASE_URI}/users`, credentials);
  setStorage(response.headers.get('Authorization').split(' ')[1], 'token');
  return response.json();
};

export const getDoctorsService = async () => {
  const response = await get(`${BASE_URI}/doctors`);
  return response.json();
};

export const getDoctorService = async (id) => {
  const response = await get(`${BASE_URI}/doctors/${id}`);
  return response.json();
};
