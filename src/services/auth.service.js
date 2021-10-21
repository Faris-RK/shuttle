import axios from "axios";

const API_URL = "https://final-project-shuttle.herokuapp.com/";

export const register = (
  username,
  email,
  password,
  birthday,
  profile_picture,
  role
) => {
  return axios.post(API_URL + "user/register", {
    username,
    email,
    password,
    birthday,
    profile_picture,
    role,
  });
};

export const login = (email, password) => {
  return axios
    .post(API_URL + "user/login/", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};
