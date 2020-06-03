import { createSelector } from 'reselect';

export const contactFromState = state => {
  return state.contacts;
};
export const filterFromState = state => state.filter;

export const getContactBySearch = createSelector(
  [contactFromState, filterFromState],
  (contacts, filter) =>
    contacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(filter);
    }),
);
