import React from "react";
import { graphql, compose } from "react-apollo";
import { Row, Input } from "react-materialize";

import booksQueries from "../../queries/bookQueries";
import Form from "../utilities/Form";

const addBookInputs = [
  { placeholder: "Book Name", name: "name", width: 6 },
  { placeholder: "Book Author", name: "author", width: 6 },
  { placeholder: "Book Publisher", name: "publisher", width: 6 },
  { placeholder: "Book Language", name: "language", width: 6 },
  { placeholder: "Book Publication Date", name: "publicationDate", width: 6 },
  { placeholder: "Book Pint Length", name: "printLength", width: 6 },
  { placeholder: "Book Summary", name: "summary", width: 6 }
];

class AddBook extends React.Component {
  state = {};

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addBookQuerie({
      variables: { ...this.state }
    });
  };

  render() {
    return (
      <div>
        <h1>Add Book Component</h1>
        <Form inputs={addBookInputs} onChange={e => this.onChange(e)} />
      </div>
    );
  }
}

export default compose(
  graphql(booksQueries.AddBook, { name: "addBookQuerie" })
)(AddBook);
