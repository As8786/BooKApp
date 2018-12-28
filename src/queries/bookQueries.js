import { gql } from "apollo-boost";

const AddBook = gql`
  mutation(
    $name: String!
    $language: String!
    $summary: String!
    $image: String!
    $printLength: String!
    $publicationDate: String!
    $author: String!
    $publisher: String!
  ) {
    AddBook(
      name: $name
      language: $language
      summary: $summary
      printLength: $printLength
      image: $image
      publicationDate: $publicationDate
      author: $author
      publisher: $publisher
    ) {
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
      image
      review
      publicationDate
      printLength
      image
    }
  }
`;

const getBook = gql`
  query($id: ID!) {
    Book(id: $id) {
      id
      name
      language
      summary
      image
      review
      publicationDate
      printLength
      image
      author
      publisher
    }
  }
`;

const removeBook = gql`
  mutation($id: ID) {
    RemoveBook(id: $id) {
      name
    }
  }
`;

const updateBook = gql`
  mutation(
    $name: String!
    $language: String!
    $summary: String!
    $image: String!
    $printLength: String!
    $publicationDate: String!
    $id: ID!
    $author: String!
    $publisher: String!
  ) {
    UpdateBook(
      name: $name
      language: $language
      summary: $summary
      printLength: $printLength
      image: $image
      publicationDate: $publicationDate
      id: $id
      author: $author
      publisher: $publisher
    ) {
      name
    }
  }
`;

const booksqueries = { AddBook, getBooks, getBook, removeBook, updateBook };

export default booksqueries;
