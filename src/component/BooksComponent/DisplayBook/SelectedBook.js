import React from "react";
import { graphql, compose } from "react-apollo";
import queries from "../../../queries/bookQueries";
import "./selectedBook.css";
const bookInforamtionItem = [
  "name",
  "author",
  "language",
  "publisher",
  "publicationDate",
  "printLength"
];

const SelectedBook = props => {
  let { Book, loading } = props.getBookQuery;
  console.log(Book);
  return loading ? (
    <div>loading ...</div>
  ) : (
    <div className="selected-book-container">
      <div className="img-container">
        <img src={Book.image} />
      </div>
      <div className="book-information-container">
        {bookInforamtionItem.map((e, i) => {
          return (
            <div key={i} className="book-information-item">
              <h5> {e}: </h5> <span>{Book[e]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default compose(
  graphql(queries.getBook, {
    name: "getBookQuery",
    options: props => {
      return {
        variables: { id: props.bookId }
      };
    }
  })
)(SelectedBook);
