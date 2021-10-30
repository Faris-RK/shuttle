import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://final-project-shuttle.herokuapp.com/";

export const searchBus =  () => {
 
  return axios.get(API_URL + "search")
}

export const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

export const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

export const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};


