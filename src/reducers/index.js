import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
const initialState = {
  token: "",
  userList: [],
  currentUser: {},
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}



export default combineReducers({
  
  auth,
  message,
});
