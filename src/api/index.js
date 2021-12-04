export const post = async (url, credentials = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  if (response.status === 400 || response.status === 401) {
    throw new Error('Please check your credentials');
  }
  return response;
};

export const get = async (url) => {
  const response =  await fetch(url, {
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  if (response.status === 400 || response.status === 401) {
    throw new Error('Please check your credentials');
  }
  return response;
};
