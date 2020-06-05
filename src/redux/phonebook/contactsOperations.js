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
import axios from 'axios';
import shortid from 'shortid';
export const asyncActionCreator = () => dispatch => {
  dispatch(fetchStart());
  axios
    .get('http://localhost:3000/contacts')
    .then(response => dispatch(fetchSuccess(response.data)))
    .catch(err => dispatch(fetchFailure(err)));
};
export const asyncActionDelete = id => dispatch => {
  dispatch(deleteStart());
  console.log(id);
  axios
    .delete(`http://localhost:3000/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(err => dispatch(deleteFailure(err)));
};
export const asyncActionAdd = newContact => dispatch => {
  dispatch(addStart());

  axios
    .post(`http://localhost:3000/contacts`, newContact)
    .then(response => dispatch(addSuccess(response.data)))
    .catch(err => dispatch(addFailure(err)));
};
