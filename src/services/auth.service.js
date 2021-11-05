import axios from "axios";
// import authHeader from "./auth-header";
export const store = window.localStorage;
const Token = store.getItem("user");

const API_URL = "https://final-project-shuttle.herokuapp.com/";

export const searchShuttle = () => {
  return axios.get(API_URL + "search/shuttle");
};

export const searchBus = (params) => {
  return axios.get(API_URL + "search", { params });
};

export const userData = () => {
  return axios.get(API_URL + "user", {
    headers: {
      AUTHORIZATION: "Bearer " + Token,
    },
  });
};
// export const searchBusList = () => {
//   return axios.get(
//     API_URL +
//       "search?arrival_shuttle_id=81cefdf4-370b-4201-8d5e-816b2fea8d8a&departure_date=2021-10-29&departure_shuttle_id=f9fafe16-544f-4928-8ed2-6bebc30e0b5a&order_type=RoundTrip&passenger=1&&return_date=2021-10-25"
//   );
// };

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
