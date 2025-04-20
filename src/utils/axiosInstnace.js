import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://ambience.in/apis/api',
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/'; 
    }
    return Promise.reject(error);
  }
);
// export const BASE_IMAGE_URL = 'https://ambience.in/apis';
export const BASE_IMAGE_URL = 'http://localhost:5000';

export default axiosInstance;
