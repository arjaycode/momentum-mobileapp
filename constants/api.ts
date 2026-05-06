import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.144.133:8000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
