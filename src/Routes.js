import React from "react";
import { Route } from "react-router-dom";
import AddBook from "./component/BooksComponent/addBook/AddBook";
import DisplayBooks from "./component/BooksComponent/DisplayBooksList/DisplayBookList";
import MainPage from "./component/MainPage";
import SelectedBook from "./component/BooksComponent/DisplayBook/SelectedBook";
class Routes extends React.Component {
  render() {
    return (
      <div className="routes-container">
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/add_book" render={() => <AddBook />} />
        <Route exact path="/books" render={() => <DisplayBooks />} />
        <Route
          exact
          path="/books/:id"
          render={props => <SelectedBook bookId={props.match.params.id} />}
        />
      </div>
    );
  }
}

export default Routes;
