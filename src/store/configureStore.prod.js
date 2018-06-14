<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
=======
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
>>>>>>> e1c065d9974aa84fdd30ebac67ad674f3306ad28

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
