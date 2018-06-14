import axios from 'axios';
import * as types from './actionTypes';

export function getGitHubUsersSuccess(users) {
  return { type: types.GET_GITHUB_USERS_SUCCESS, users };
}

export function searchGitHubUsers(user) {
  return (dispatch) => {
    return axios
      .get(`https://api.github.com/search/users?q=${user}`)
      .then((res) => {
        dispatch(getGitHubUsersSuccess(res.data.items));
      });
  };
}
