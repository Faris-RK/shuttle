import axios from "axios";
const store = window.localStorage;
const Token = store.getItem("user");

const API_URL = "https://final-project-shuttle.herokuapp.com/";

export const getBookedSeat = (params) => {
  return axios.get(API_URL + "order", {
    params,
    headers: {
      AUTHORIZATION: "Bearer " + Token,
    },
  });
};
