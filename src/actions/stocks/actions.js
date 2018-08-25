import { STOCKAPI } from "../../utils";
import * as types from "./types";
import toastr from "toastr";

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
      if (error) {
        console.log({ error });
        if (error.response.data === "Unknown symbol") {
          toastr.error("Symbol Desconhecido, Favor Verificar");
        }
        dispatch(getLatestPriceFailed(error));
      }
    }
  };
};

// Clear All

export const clearAll = () => {
  return { type: types.CLEAR_ALL };
};

export const clear = () => {
  return dispatch => {
    dispatch(clearAll());
  };
};
