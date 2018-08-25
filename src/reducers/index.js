import { combineReducers } from "redux";
import initialState from "./initialState";

import stocks from "./stocksReducer";
import company from "./companyReducer";
import chart from "./chartReducer";

const appReducer = combineReducers({
  stocks,
  company,
  chart
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_ALL") {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
