import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default function TriTacToe() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
