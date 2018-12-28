import request from "./request";

const GET_SELECTED_BOOK = "GET_SELECTED_BOOK";
const GET_SELECTED_BOOK_SUCCESS = "GET_SELECTED_BOOK_SUCCESS";
const GET_SELECTED_BOOK_FAILURE = "GET_SELECTED_BOOK_FAILURE";

export const actions = {
  GET_SELECTED_BOOK,
  GET_SELECTED_BOOK_FAILURE,
  GET_SELECTED_BOOK_SUCCESS
};

const getSelectedBookSuccess = Book => {
  return {
    type: GET_SELECTED_BOOK_SUCCESS,
    Book
  };
};

const getSelectedBookError = error => {
  return {
    type: GET_SELECTED_BOOK_SUCCESS,
    error
  };
};

export const getSelectedBook = bookId => dispatch => {
  dispatch({
    type: GET_SELECTED_BOOK
  });

  if (request.getSlectedBook(bookId)) {
    return dispatch(getSelectedBookSuccess({ name: "eee" }));
  } else {
    return dispatch(getSelectedBookError());
  }
};
