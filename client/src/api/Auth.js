import axios from 'axios';

const API_URL = process.env.BACKEND_URL;

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  });
  return data;
};

export const register = async (name, email, password) => {
  const { data } = await axios.post(`${API_URL}/api/auth/register`, {
    name,
    email,
    password,
  });
  return data;
};
