import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const responseError = error.response;
    if (responseError.status === 401) {
      const responseMessage = responseError.data.message;
      if (
        responseMessage === 'Token missing' ||
        responseMessage === 'Token is invalid'
      ) {
        localStorage.removeItem('@matesi:user');
        localStorage.removeItem('@matesi:token');
        api.defaults.headers.Authorization = undefined;
        window.location.href = '/entrar';
      }
    }
  },
);

export default api;
