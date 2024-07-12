import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reduxStore from './redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom'

const {store, persistor} = reduxStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
