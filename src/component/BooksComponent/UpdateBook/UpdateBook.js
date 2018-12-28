import React from "react";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import { getSelectedBook } from "../../../reduxFiles/actions";

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
  state = {};
  componentDidMount() {
    this.props.onDidiMount("5c23dc4899f23318d0ef15df");
    console.log("mounttt");
  }
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
    let { loading, Book } = this.props.getBook;
    if (loading) {
      return <div> Loading ...</div>;
    } else {
      this.setState({
        ...Book
      });
      return (
        <Form
          inputs={updateBookInputs}
          onChange={e => this.onChange(e)}
          onSubmit={e => this.onSubmit(e)}
        />
      );
    }
  };

  render() {
    return (
      <div className="updateBook-container">
        <h1>Update Book Information</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.selectedBookReducer
  };
};

const mapDispacthToProps = dispatch => {
  return {
    onDidiMount: bookId => {
      dispatch(getSelectedBook(bookId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispacthToProps
)(UpdateBook);
