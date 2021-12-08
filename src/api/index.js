import { getStorage } from '../scripts/storage';

export const post = async (url, credentials = {}, token = '', picture = false) => {
  const response = await fetch(url, {
    method: 'POST',
    body: picture ? credentials : JSON.stringify(credentials),
    headers: {
      ...(picture ? {} : { 'Content-type': 'application/json; Charset=UTF-8' }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  if (response.status === 400 || response.status === 401) {
    throw new Error('Please check your credentials');
  }
  return response;
};

export const get = async (url) => {
  const token = getStorage('token');
  const headers = {
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(url, headers);
  if (response.status === 400 || response.status === 401) {
    throw new Error('Please check your credentials');
  }
  return response;
};
