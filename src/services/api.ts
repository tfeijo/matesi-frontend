import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
        delete api.defaults.headers.common['Authorization'];
        window.location.href = '/entrar';
      }
    }
    return Promise.reject(error);
  },
);

export default api;
