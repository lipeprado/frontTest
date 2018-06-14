import * as types from "../actions/actionTypes";

export const getHostLocationRequest = () => {
  return { type: types.GET_LOCATION_REQUEST };
};

export const getHostLocation = () => {
  return () => {
    try {
      console.log("Teste");
    } catch (error) {
      console.log(error);
    }
  };
};
