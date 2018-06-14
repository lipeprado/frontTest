/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import jwtDecode from 'jwt-decode';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { axios } from './utils';
import { onValidAuth } from './actions/AuthActions';

import App from './components/App';
import './static/styles/global.scss';
import configureStore from './store/configureStore';

const store = configureStore();

bootstrap();
function bootstrap() {
  if (localStorage['TOKEN_NAME']) {
    let user = localStorage.getItem('TOKEN_NAME');
    let decodeUser = jwtDecode(user);

    // if Token is not valid redirect to '/login'

    // verify if token is valid and search for user in database
    axios.setAuthToken(localStorage['TOKEN_NAME']);
    store.dispatch(onValidAuth(decodeUser));
  }
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);
