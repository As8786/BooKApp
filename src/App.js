import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import AddBook from "./component/BooksComponent/AddBook";
import DisplayBooks from "./component/BooksComponent/DisplayBooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <AddBook />
          <DisplayBooks />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
