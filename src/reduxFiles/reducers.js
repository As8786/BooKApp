import { combineReducers } from "redux";
import { actions } from "./actions";

let selectedBookReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.GET_SELECTED_BOOK_SUCCESS:
      return action.Book;
    default:
      return state;
  }
};

const reducers = combineReducers({ selectedBookReducer });
export default reducers;
