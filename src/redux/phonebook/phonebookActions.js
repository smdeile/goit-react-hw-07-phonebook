import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('add/contact');
export const deleteContact = createAction('delete/contact');
export const filterContact = createAction('filter/contact');
export const fetchStart = createAction('notes/FETCH_START');
export const fetchSuccess = createAction('notes/FETCH_SUCCESS');
export const fetchFailure = createAction('notes/FETCH_FAILURE');
