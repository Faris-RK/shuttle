import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

import * as AuthService from "../services/auth.service";

// Search Bar ==========================================
export const searchBus =
  (
    departure_shuttle_id,
    arrival_shuttle_id,
    departure_date,
    return_date,
    passenger,
    order_type
  ) =>
  (dispatch) => {
    return AuthService.searchBus(
      departure_shuttle_id,
      arrival_shuttle_id,
      departure_date,
      return_date,
      passenger,
      order_type
    );
  };

export const register =
  (fullname, email, password, birthday, roles, cb) => (dispatch) => {
    return AuthService.register(
      fullname,
      email,
      password,
      birthday,

      roles
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        cb()
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const login = (fullname, password, cb) => (dispatch) => {
  return AuthService.login(fullname, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      cb()
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
