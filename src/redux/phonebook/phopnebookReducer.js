import { createReducer, nanoid } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filterContact,
  fetchSuccess,
} from './phonebookActions';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
export const addContactToContacts = createReducer(initialState.contacts, {
  // [asyncFetch]: (state, action) => {
  //   return [...action.payload];
  // },
  [fetchSuccess]: (state, action) => {
    const NewContact = {
      name: action.payload,
      number: action.payload.number,
      id: nanoid(),
    };
    console.log(action.payload);
    return [...state, ...action.payload];
  },
  [addContact]: (state, action) => {
    const NewContact = {
      name: action.payload.name,
      number: action.payload.number,
      id: nanoid(),
    };
    console.log(action.payload);
    return [...state, NewContact];
  },
  [deleteContact]: (state, action) => {
    const deleteContact = state.filter(
      contact => contact.id !== action.payload,
    );
    return deleteContact;
  },
});
export const filterContacts = createReducer(initialState.filter, {
  [filterContact]: (state, action) => {
    return action.payload;
  },
});
