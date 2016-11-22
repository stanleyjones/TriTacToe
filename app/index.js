import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import rootReducer from './reducers';
import { asyncLoadSettings } from './actions';

const logger = store => next => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(logger));
asyncLoadSettings(store);

export default function TriTacToe() {
  return <Provider store={store}><App /></Provider>;
}
