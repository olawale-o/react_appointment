const post = async (url, credentials = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });
  return response;
};

export default post;
