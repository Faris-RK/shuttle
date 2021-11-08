import {
  STORE_PASSENGER_DATA,
  STORE_SHUTTLE_DATA,
  STORE_SELECT_SEAT,
} from "./types";


export const storeShuttleData = (shuttles) => (dispatch) => {
  dispatch({
    type: STORE_SHUTTLE_DATA,
    payload: shuttles,
  });
};

export const storePassengerData = (passengerData) => (dispatch) => {
  console.log(passengerData, "ini action");
  dispatch({
    type: STORE_PASSENGER_DATA,
    payload: passengerData,
  });
};

export const storeSelectSeat = (seatNumber) => (dispatch) => {
  dispatch({
    type: STORE_SELECT_SEAT,
    payload: seatNumber,
  });
};

