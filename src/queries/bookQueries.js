import { gql } from "apollo-boost";

const AddBook = gql`
  mutation($name: String!, $language: String!, $summary: String!) {
    AddBook(name: $name, language: $language, summary: $summary) {
      name
      id
    }
  }
`;

const getBooks = gql`
  {
    Books {
      id
      name
      language
      summary
    }
  }
`;

const booksqueries = { AddBook, getBooks };

export default booksqueries;
