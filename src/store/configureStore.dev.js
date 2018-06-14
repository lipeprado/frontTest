<<<<<<< HEAD
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
=======
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import logger from "redux-logger";
import rootReducer from "../reducers";
>>>>>>> e1c065d9974aa84fdd30ebac67ad674f3306ad28

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
<<<<<<< HEAD
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())),
=======
    composeEnhancers(
      applyMiddleware(thunk, logger, reduxImmutableStateInvariant())
    )
>>>>>>> e1c065d9974aa84fdd30ebac67ad674f3306ad28
  );
}
