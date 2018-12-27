import { combineReducers } from "redux";

let selectedBookReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_SELECTED_BOOK":
      return action.book;
    default:
      return state;
  }
};

const reducers = combineReducers({ selectedBookReducer });
export default reducers;
