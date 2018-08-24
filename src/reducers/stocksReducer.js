import initialState from "./initialState";
import * as types from "../actions/stocks/types";

export default function(state = initialState.stocks, action) {
  switch (action.type) {
    case types.GET_LATEST_PRICE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.GET_LATEST_PRICE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        symbol_info: {
          companyName: action.stocks.companyName,
          sector: action.stocks.sector,
          symbol: action.stocks.symbol
        },
        latest_price: action.stocks.latestPrice
      });
    case types.GET_LATEST_PRICE_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        latest_price: 0
      });
    default:
      return state;
  }
}
