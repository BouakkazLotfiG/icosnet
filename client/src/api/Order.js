import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const createOrder = async (orderData) => {
  const response = await axios.post(`${API_URL}/api/orders/create`, orderData);
  return response.data;
};

export const getAllOrders = async () => {
  const response = await axios.get(`${API_URL}/api/orders/`);
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await axios.get(`${API_URL}/api/orders/${id}`);
  return response.data;
};

export const updateOrder = async (id, updatedData) => {
  const response = await axios.put(
    `${API_URL}/api/orders/update/${id}`,
    updatedData
  );
  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await axios.delete(`${API_URL}/api/orders/delete/${id}`);
  return response.data;
};
