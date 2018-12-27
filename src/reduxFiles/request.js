import queries from "../queries/bookQueries";
import { graphql } from "react-apollo";

const getSlectedBook = bookId => {
  graphql(queries.getBook, {
    options: () => {
      return {
        variables: { id: bookId }
      };
    }
  });
};

const request = { getSlectedBook };

export default request;
