<<<<<<< HEAD
import { combineReducers } from 'redux';
import github from './githubReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  github,
  auth,
});

export default rootReducer;
=======
import { combineReducers } from "redux";
import location from "./locationReducer";

const appReducer = combineReducers({
  location
});

export default appReducer;
>>>>>>> e1c065d9974aa84fdd30ebac67ad674f3306ad28
