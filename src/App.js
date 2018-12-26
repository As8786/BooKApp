import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { BrowserRouter, Link } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./NavBar";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="app-container">
            <NavBar />
            <Routes />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
