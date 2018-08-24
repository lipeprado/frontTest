import initialState from "./initialState";
import * as types from "../actions/chart/types";

export default function(state = initialState.chart, action) {
  switch (action.type) {
    case types.GET_CHART_DATA_REQUEST:
      return Object.assign({}, state, {
        isFetchingChart: true
      });
    case types.GET_CHART_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetchingChart: false,
        data: action.data
      });
    case types.GET_CHART_DATA_FAILED:
      return Object.assign({}, state, {
        isFetchingChart: false
      });
    default:
      return state;
  }
}
