import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('add/contact');
export const deleteContact = createAction('delete/contact');
export const filterContact = createAction('filter/contact');
export const fetchStart = createAction('notes/FETCH_START');
export const fetchSuccess = createAction('notes/FETCH_SUCCESS');
export const fetchFailure = createAction('notes/DELETE_FAILURE');
export const deleteStart = createAction('notes/DELETE_START');
export const deleteSuccess = createAction('notes/DELETE_SUCCESS');
export const deleteFailure = createAction('notes/DELETE_FAILURE');
export const addStart = createAction('notes/ADD_START');
export const addSuccess = createAction('notes/ADD_SUCCESS');
export const addFailure = createAction('notes/ADD_FAILURE');
