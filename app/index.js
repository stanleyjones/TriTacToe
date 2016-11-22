import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import rootReducer from './reducers';
import { asyncLoadSettings } from './actions';

const store = createStore(rootReducer);
asyncLoadSettings(store);

export default function TriTacToe() {
  return <Provider store={store}><App /></Provider>;
}
