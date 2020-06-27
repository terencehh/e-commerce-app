import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// wrap entire application into redux store provider
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  // Parent wrapper which allows all child components to access global redux store
  <Provider store={store}>
    { /* component that enables all functionality of routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
