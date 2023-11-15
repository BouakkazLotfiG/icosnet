import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const login = async (email, password) => {
  const res = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  });
  return res.data;
};

export const register = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/api/auth/register`, {
    email,
    password,
  });
  return data;
};
