import React from "react";
import { graphql, compose } from "react-apollo";
import queries from "../../queries/bookQueries";

class DisplayBooks extends React.Component {
  // function that get back the result of GetBooksQuery and display it
  displayBooks = () => {
    let { Books, loading } = this.props.getBooksQuery;
    if (loading) {
      return <div> loading</div>;
    } else {
      return Books.map((e, i) => {
        return (
          <ul key={i}>
            <li>{e.name}</li>
            <li>{e.language}</li>
            <li>{e.summary}</li>
          </ul>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Display Books Component</h1>
        {this.displayBooks()}
      </div>
    );
  }
}

export default compose(graphql(queries.getBooks, { name: "getBooksQuery" }))(
  DisplayBooks
);
