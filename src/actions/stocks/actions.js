import { STOCKAPI } from "../../utils";
import * as types from "./types";

// getLatestPrice

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
  return async dispatch => {
    try {
      dispatch(getLatestPriceRequest());
      const response = await STOCKAPI.get(`stock/${symbol}/quote`);
      dispatch(getLatestPriceSuccess(response.data));
    } catch (error) {
      dispatch(getLatestPriceFailed(error));
    }
  };
};
