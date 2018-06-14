import jwtDecode from 'jwt-decode';
import * as types from './actionTypes';
import { axios } from '../utils/';

console.log({axios});

export const authRequest = () => {
  return { type: types.AUTH_REQUEST };
};

export const onValidAuth = (user) => {
  return { type: types.AUTH_SUCCESS, user };
};

export const authFailed = () => {
  return { type: types.AUTH_FAILED };
};

export const login = (user) => {
  return async (dispatch) => {
    try {
      dispatch(authRequest());
      const response = await axios.apiOni.post('login/', {
        username: user.username,
        password: user.password,
      });
      authUser(response, dispatch);
      return response.data.token;
    } catch (error) {
      dispatch(authFailed());
      throw { error };
    }
  };
};

export const noToken = () => {
  return { type: types.NO_TOKEN };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(noToken());
    localStorage.removeItem('TOKEN_NAME');
    axios.setAuthToken(false);
  };
};

const authUser = (res, dispatch) => {
  const token = res.data.token;
  localStorage.setItem('TOKEN_NAME', token);
  axios.setAuthToken(token);
  dispatch(onValidAuth(jwtDecode(token)));
};
