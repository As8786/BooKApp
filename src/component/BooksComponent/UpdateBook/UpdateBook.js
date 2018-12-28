import React from "react";
import { graphql, compose } from "react-apollo";

import booksQueries from "../../../queries/bookQueries";
import Form from "../../utilities/form/Form";
import "./updateBook.css";
const updateBookInputs = [
  { placeholder: "Book Name", name: "name", width: 6 },
  { placeholder: "Book Author", name: "author", width: 6 },
  { placeholder: "Book Publisher", name: "publisher", width: 6 },
  { placeholder: "Book Language", name: "language", width: 6 },
  { placeholder: "Book Publication Date", name: "publicationDate", width: 6 },
  { placeholder: "Book Print Length", name: "printLength", width: 6 },
  { placeholder: "Book Image", name: "image", width: 6 },
  { placeholder: "Book Summary", name: "summary", width: 6 }
];

class UpdateBook extends React.Component {
  state = { name: null };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addBookQuerie({
      variables: { ...this.state },
      refetchQueries: [{ query: booksQueries.getBooks }]
    });
  };

  fetchBookInformationAndFillState = () => {
    let { loading, Book } = this.props.getBookQuery;
    if (loading) {
      return <div> Loading ...</div>;
    } else {
      this.state.name === null &&
        this.setState({
          ...Book
        });
      return (
        <Form
          inputs={updateBookInputs}
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
          value={this.state}
        />
      );
    }
  };

  render() {
    return (
      <div className="updateBook-container">
        <h1>Update Book Information</h1>
        {this.fetchBookInformationAndFillState()}
      </div>
    );
  }
}

export default compose(
  graphql(booksQueries.getBook, {
    name: "getBookQuery",
    options: props => {
      return { variables: { id: props.bookIds } };
    }
  })
)(UpdateBook);
