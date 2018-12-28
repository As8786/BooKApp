import React from "react";
import { graphql, compose } from "react-apollo";
import { Link, Redirect } from "react-router-dom";
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

class SelectedBook extends React.Component {
  state = { isDeleted: false };

  onRemoveBookClik = e => {
    e.preventDefault();
    this.props.removeBookQuery({
      variables: { id: this.props.bookId },
      refetchQueries: [{ query: queries.getBooks }]
    });
    this.setState({
      isDeleted: true
    });
  };

  displaySelectedBook = () => {
    let { Book, loading } = this.props.getBookQuery;
    if (loading) {
      return <div>loading ...</div>;
    } else {
      return (
        <div className="selected-book-container">
          <div className="img-container">
            <img src={Book.image} alt="book " />
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
    }
  };
  render() {
    return (
      <div>
        {this.state.isDeleted && <Redirect to="/books" />}
        {this.displaySelectedBook()}
        <Link to={`/update_book/${this.props.bookId}`}>
          <button> Update Book </button>
        </Link>
        <button onClick={this.onRemoveBookClik}>Remove Book</button>
      </div>
    );
  }
}

export default compose(
  graphql(queries.getBook, {
    name: "getBookQuery",
    options: props => {
      return {
        variables: { id: props.bookId }
      };
    }
  }),
  graphql(queries.removeBook, { name: "removeBookQuery" })
)(SelectedBook);
