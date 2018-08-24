import { combineReducers } from "redux";
import stocks from "./stocksReducer";
import company from "./companyReducer";
import chart from "./chartReducer";

const rootReducer = combineReducers({
  stocks,
  company,
  chart
});

export default rootReducer;
