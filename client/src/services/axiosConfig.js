import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

apiClient.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('jwtToken');
    if (token) {
      console.log(token)
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error)
  }
);

export default apiClient;