import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import "./static/styles/global.scss";
import "font-awesome/css/font-awesome.min.css";
import configureStore from "./store/configureStore";

const store = configureStore();

render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
