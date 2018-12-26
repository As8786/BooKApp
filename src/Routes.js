import React from "react";
import { Route } from "react-router-dom";
import AddBook from "./component/BooksComponent/addBook/AddBook";
import DisplayBooks from "./component/BooksComponent/DisplayBooks/DisplayBookList";
import MainPage from "./component/MainPage";
class Routes extends React.Component {
  render() {
    return (
      <div className="routes-container">
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/add_book" render={() => <AddBook />} />
        <Route exact path="/books" render={() => <DisplayBooks />} />
      </div>
    );
  }
}

export default Routes;
