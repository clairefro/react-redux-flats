import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './components/app';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flat_reducer.js';

const reducers = combineReducers({
  flats: flatsReducer
});
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>, root
  );
}
