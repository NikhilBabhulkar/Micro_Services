// src/services/api.js

import axios from 'axios';

const backendURL = 'http://localhost:3009'; // Replace with the actual URL of your backend service

export const getBooks = () => {
  return axios.get(`${backendURL}/books`);
};



export const getCustomers = () => {
  return axios.get(`${backendURL}/customers`);
};

export const getOrders = () => {
  return axios.get(`${backendURL}/orders`);
};
