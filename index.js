import React from "react";
import { AppRegistry } from "react-native";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";

import reducers from "./src/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

const appRedux = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("LoginApp", () => appRedux);
