import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import store from './redux/store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
