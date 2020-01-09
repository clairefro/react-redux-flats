import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

import App from './components/app';

import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';
import mapReducer from './reducers/map_reducer';
import markerReducer from './reducers/marker_reducer';

const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer,
  map: mapReducer,
  marker: markerReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>, root
  );
}
