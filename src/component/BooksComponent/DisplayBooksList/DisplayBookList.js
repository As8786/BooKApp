import React from "react";
import { graphql, compose } from "react-apollo";
import queries from "../../../queries/bookQueries";

import BookDisplay from "./BookItem";
import "./displayBooks.css";

class DisplayBooks extends React.Component {
  // function that get back the result of GetBooksQuery and display it
  displayBooks = () => {
    let { Books, loading } = this.props.getBooksQuery;
    if (loading) {
      return (
        <div class="preloader-wrapper big active ">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle" />
            </div>
            <div class="gap-patch">
              <div class="circle" />
            </div>
            <div class="circle-clipper right">
              <div class="circle" />
            </div>
          </div>
        </div>
      );
    } else {
      return Books.map((e, i) => {
        return <BookDisplay book={e} key={i} />;
      });
    }
  };

  render() {
    return (
      <div className="books-display-container">
        <h1> Books List</h1>
        <div className="books-card-container">{this.displayBooks()}</div>
      </div>
    );
  }
}

export default compose(graphql(queries.getBooks, { name: "getBooksQuery" }))(
  DisplayBooks
);
