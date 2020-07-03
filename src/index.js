import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// wrap entire application into redux store provider
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  // Parent wrapper which allows all child components to access global redux store
  <Provider store={store}>
    { /* component that enables all functionality of routing */}
    <BrowserRouter>
      { /* have app always have access to persisted store. Fire off actions to rehydrate state whenever app refreshes */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
