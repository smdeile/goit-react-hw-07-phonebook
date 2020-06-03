import { createReducer, nanoid } from '@reduxjs/toolkit';
import {
  addContact,
  filterContact,
  fetchSuccess,
  deleteSuccess,
  addSuccess,
} from './phonebookActions';
import { asyncActionAdd } from '../../redux/phonebook/contactsOperations';

export const addContactToContacts = createReducer([], {
  [fetchSuccess]: (state, action) => {
    return [...state, ...action.payload];
  },
  [addSuccess]: (state, action) => {
    const NewContact = {
      name: action.payload.name,
      number: action.payload.number,
      id: action.payload.id,
    };
    asyncActionAdd(NewContact);
    return [...state, NewContact];
  },

  [deleteSuccess]: (state, action) => {
    const deleteContact = state.filter(
      contact => contact.id !== action.payload,
    );
    return deleteContact;
  },
});
export const filterContacts = createReducer('', {
  [filterContact]: (state, action) => {
    return action.payload;
  },
});
