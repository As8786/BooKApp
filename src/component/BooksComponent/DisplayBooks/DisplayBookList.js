import React from "react";
import { graphql, compose } from "react-apollo";
import queries from "../../../queries/bookQueries";

import BookDisplay from "./BookDisplay";
import "./displayBooks.css";

class DisplayBooks extends React.Component {
  // function that get back the result of GetBooksQuery and display it
  displayBooks = () => {
    let { Books, loading } = this.props.getBooksQuery;
    if (loading) {
      return <div> loading</div>;
    } else {
      return Books.map((e, i) => {
        return <BookDisplay book={e} key={i} />;
      });
    }
  };

  render() {
    return (
      <div className="books-display-container">
        <h1>Display Books Component</h1>
        <div className="books-card-container">{this.displayBooks()}</div>
      </div>
    );
  }
}

export default compose(graphql(queries.getBooks, { name: "getBooksQuery" }))(
  DisplayBooks
);
