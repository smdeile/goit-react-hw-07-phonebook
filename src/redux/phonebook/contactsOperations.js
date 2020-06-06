import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  deleteStart,
  deleteSuccess,
  deleteFailure,
  addStart,
  addSuccess,
  addFailure,
} from './phonebookActions';
import { getContactsFetch, deleteItemFetch, addContactFetch } from './api';

export const asyncActionCreator = () => dispatch => {
  dispatch(fetchStart());

  getContactsFetch()
    .then(response => dispatch(fetchSuccess(response.data)))
    .catch(err => dispatch(fetchFailure(err)));
};
export const asyncActionDelete = id => dispatch => {
  dispatch(deleteStart());

  deleteItemFetch(id)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(err => dispatch(deleteFailure(err)));
};
export const asyncActionAdd = newContact => dispatch => {
  dispatch(addStart());

  addContactFetch(newContact)
    .then(response => dispatch(addSuccess(response.data)))
    .catch(err => dispatch(addFailure(err)));
};
