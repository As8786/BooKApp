import React from "react";
import { graphql, compose } from "react-apollo";
import booksQueries from "../../queries/bookQueries";

class AddBook extends React.Component {
  state = {
    name: "",
    summary: "",
    language: ""
  };

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
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Book Name</label>
            <input
              placeholder="Book name"
              name="name"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label> Book Language</label>
            <input
              placeholder="Book language"
              name="language"
              onChange={this.onChange}
            />
          </div>
          <div>
            <label> Book Summary</label>
            <input
              placeholder="Book summary"
              name="summary"
              onChange={this.onChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(booksQueries.AddBook, { name: "addBookQuerie" })
)(AddBook);
