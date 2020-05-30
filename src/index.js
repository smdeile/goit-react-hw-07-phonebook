import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './base.css';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {
  addContactToContacts,
  filterContacts,
} from './redux/phonebook/phopnebookReducer';
import ReduxThunk from 'redux-thunk';

const middleware = [ReduxThunk];

const rootReducer = combineReducers({
  contacts: addContactToContacts,
  filter: filterContacts,
  // fetchStart: asyncActionCreator,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
