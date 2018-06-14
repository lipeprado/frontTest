import { combineReducers } from 'redux';
import github from './githubReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  github,
  auth,
});

export default rootReducer;
