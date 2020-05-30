import { fetchStart, fetchSuccess, fetchFailure } from './phonebookActions';
import axios from 'axios';

export const asyncActionCreator = () => dispatch => {
  dispatch(fetchStart());
  console.log('.asyncActionCreator');
  axios
    .get('http://localhost:3000/contacts')
    .then(response => dispatch(fetchSuccess(response.data)))
    .catch(err => dispatch(fetchFailure(err)));
};
