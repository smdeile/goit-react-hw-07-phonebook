import axios from 'axios';

export const getContactsFetch = () => {
  return axios.get('http://localhost:3000/contacts');
};

export const deleteItemFetch = id => {
  return axios.delete(`http://localhost:3000/contacts/${id}`);
};

export const addContactFetch = newContact => {
  return axios.post(`http://localhost:3000/contacts`, newContact);
};
