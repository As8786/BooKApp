const graphQl = require("graphql");

const {
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull
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

module.exports = new GraphQLSchema({
  query: RootQueries
});
