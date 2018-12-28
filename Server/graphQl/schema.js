const graphQl = require("graphql");

const {
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} = graphQl;

// Import GraphQl Types
const BookType = require("./types/bookType");
const AuthorType = require("./types/authorType");
const PublisherType = require("./types/publisherType");

// Import Mongoose Models
const booksModel = require("../mongoose/models/bookModel");
const authorsModel = require("../mongoose/models/authorModel");
const publishersModel = require("../mongoose/models/publisherModel");
const userModel = require("../mongoose/models/userModel");

const RootQueries = new GraphQLObjectType({
  name: "RootQueries",
  fields: {
    Book: {
      type: BookType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        console.log(args.id);
        return booksModel.findById(args.id);
      }
    },
    Author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return authorsModel.findById(args.id);
      }
    },
    Publisher: {
      type: PublisherType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return publishersModel.findById(args.id);
      }
    },
    Books: {
      type: GraphQLList(BookType),
      resolve(parent, args) {
        return booksModel.find();
      }
    },
    Authors: {
      type: GraphQLList(AuthorType),
      resolve(parent, args) {
        return authorsModel.find();
      }
    },
    Publishers: {
      type: GraphQLList(PublisherType),
      resolve(parent, args) {
        return publishersModel.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    AddBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        publisher: { type: GraphQLString },
        author: { type: GraphQLString },
        language: { type: GraphQLString },
        printLength: { type: GraphQLString },
        summary: { type: GraphQLString },
        publicationDate: { type: GraphQLString },
        image: { type: GraphQLString }
      },
      resolve(parent, args) {
        let newBook = new booksModel({ ...args });
        return newBook.save();
      }
    },
    AddAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        summary: { type: GraphQLString },
        review: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let newAuthor = new authorsModel({ ...args });
        return newAuthor.save();
      }
    },
    AddPublisher: {
      type: PublisherType,
      args: {
        name: { type: GraphQLString },
        summary: { type: GraphQLString },
        review: { type: GraphQLInt }
      },
      resolve(parent, args) {
        let newPublisher = new publishersModel({ ...args });
        return newPublisher.save();
      }
    },
    RemoveBook: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return booksModel.findOneAndDelete({ _id: args.id });
      }
    },
    UpdateBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        publisher: { type: GraphQLString },
        author: { type: GraphQLString },
        language: { type: GraphQLString },
        printLength: { type: GraphQLString },
        summary: { type: GraphQLString },
        publicationDate: { type: GraphQLString },
        image: { type: GraphQLString },
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        let updatedBook = { ...args };
        return booksModel.findOneAndUpdate(
          { _id: args.id },
          { ...updatedBook }
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueries,
  mutation: Mutation
});
