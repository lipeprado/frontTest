import { STOCKAPI } from "../../utils";
import * as types from "./types";

// getCompanyInfo
export const getCompanyInfoRequest = () => {
  return { type: types.GET_COMPANY_INFO_REQUEST };
};
export const getCompanyInfoSuccess = company => {
  return { type: types.GET_COMPANY_INFO_SUCCESS, company };
};
export const getCompanyInfoFailed = () => {
  return { type: types.GET_COMPANY_INFO_FAILED };
};

export const getCompanyInfo = symbol => {
  return async dispatch => {
    try {
      dispatch(getCompanyInfoRequest());
      const response = await STOCKAPI.get(`stock/${symbol}/company`);
      dispatch(getCompanyInfoSuccess(response.data));
    } catch (error) {
      dispatch(getCompanyInfoFailed(error));
    }
  };
};
