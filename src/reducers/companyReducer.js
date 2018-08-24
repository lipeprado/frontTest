import initialState from "./initialState";
import * as types from "../actions/company/types";

export default function(state = initialState.company, action) {
  switch (action.type) {
    case types.GET_COMPANY_INFO_REQUEST:
      return Object.assign({}, state, {
        isFetchingCompany: true
      });
    case types.GET_COMPANY_INFO_SUCCESS:
      return Object.assign({}, state, {
        isFetchingCompany: false,
        info: action.company
      });
    case types.GET_COMPANY_INFO_FAILED:
      return Object.assign({}, state, {
        isFetchingCompany: false
      });
    default:
      return state;
  }
}
