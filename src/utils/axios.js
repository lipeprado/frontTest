import axios from "axios";
import { BASEURL } from "./constants";

export const setAxiosDefaults = () => {
  axios.defaults.headers.common["Content-Type"] =
    "application/json; charset=utf-8";
};

export const clearAxiosDefaults = () => {
  axios.defaults.headers.common["Content-Type"] = "";
  axios.defaults.baseURL = "";
};

export const STOCKAPI = axios.create({
  baseURL: BASEURL,
  crossDomain: true
});
