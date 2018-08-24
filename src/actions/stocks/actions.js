import { STOCKAPI } from "../../utils";
import * as types from "./types";

export const getLatestPriceRequest = () => {
  return { type: types.GET_LATEST_PRICE_REQUEST };
};
export const getLatestPriceSuccess = stocks => {
  return { type: types.GET_LATEST_PRICE_SUCCESS, stocks };
};
export const getLatestPriceFailed = () => {
  return { type: types.GET_LATEST_PRICE_FAILED };
};

export const getLatestPrice = symbol => {
  return dispatch => {
    try {
      // dispatch(getLatestPriceRequest());
      const response = STOCKAPI.get(`stock/${symbol}/quote`);
      debugger;
      dispatch(getLatestPriceSuccess(response));
    } catch (error) {
      dispatch(getLatestPriceFailed(error));
    }
  };
};
