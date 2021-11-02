import axios from "axios";
export const store = window.localStorage;

const API_URL = "https://final-project-shuttle.herokuapp.com/";

export const searchShuttle = () => {
  return axios.get(API_URL + "search/shuttle");
};

export const searchBus = (params) => {
  return axios.get(API_URL + "search", { params });
};

export const register = (
  fullname,
  email,
  birthday,
  password,

  roles
) => {
  return axios.post(API_URL + "user/register", {
    fullname,
    email,
    birthday,
    password,

    roles,
  });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "user/login/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        store.setItem("user", response.data.token);
      }

      return response.data;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
};

export const logout = () => {
  store.removeItem("user");
};
