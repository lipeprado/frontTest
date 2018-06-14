import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import SearchContainer from './components/github/search/SearchContainer';

export default (
  <App>
    <Route exact path="/" component={SearchContainer} />
  </App>
);
