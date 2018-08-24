import { STOCKAPI } from "../../utils";
import * as types from "./types";

// getChartData
export const getChartDataRequest = () => {
  return { type: types.GET_CHART_DATA_REQUEST };
};
export const getChartDataSuccess = data => {
  return { type: types.GET_CHART_DATA_SUCCESS, data };
};
export const getChartDataFailed = () => {
  return { type: types.GET_CHART_DATA_FAILED };
};

export const getChartData = symbol => {
  return async dispatch => {
    try {
      dispatch(getChartDataRequest());
      const response = await STOCKAPI.get(`stock/${symbol}/chart`);
      dispatch(getChartDataSuccess(response.data));
    } catch (error) {
      dispatch(getChartDataFailed(error));
    }
  };
};
