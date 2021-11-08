import {
  STORE_SHUTTLE_DATA,
  STORE_PASSENGER_DATA,
  STORE_SELECT_SEAT,
} from "../actions/types";

const initialState = {
  shuttles: {},
  passengerData: {},
  selectSeat: [],
};

export default function bookingData(state = initialState, action) {
  const { type, payload } = action;
  console.log(payload, "ini reducer");

  switch (type) {
    case STORE_SHUTTLE_DATA:
      return {
        ...state,
        shuttles: payload,
      };

    case STORE_PASSENGER_DATA:
      return {
        ...state,
        passengerData: payload,
      };

    case STORE_SELECT_SEAT:
      return {
        ...state,
        selectSeat: [payload],
      };

    

    default:
      return state;
  }
}
