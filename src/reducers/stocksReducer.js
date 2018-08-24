import initialState from "./initialState";
import * as types from "../actions/stocks/types";

export default function(state = initialState.stocks, action) {
  switch (action.type) {
    case types.GET_LATEST_PRICE_REQUEST:
      return Object.assign({}, state, {
        users: action.users
      });
    case types.GET_LATEST_PRICE_SUCCESS:
      return Object.assign({}, state, {
        users: action.users
      });
    case types.GET_LATEST_PRICE_FAILED:
      return Object.assign({}, state, {
        users: action.users
      });
    default:
      return state;
  }
}
