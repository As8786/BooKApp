const graphQL = require("graphql");
const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const Authortype = require("./authorType");
const PublisherType = require("./publisherType");
const UserType = require("./userType");

const BookType = new GraphQLObjectType({
  name: "BookType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    language: { type: GraphQLString },
    summary: { type: GraphQLString },
    review: { type: GraphQLInt },
    publicationDate: { type: GraphQLString },
    printLength: { type: GraphQLInt },
    publisherId: { type: GraphQLID },
    authorId: { type: GraphQLID },
    userId: { type: GraphQLID },
    author: {
      type: Authortype,
      resolve(parent, args) {}
    },
    publisher: {
      type: PublisherType,
      resolve(parent, args) {}
    },
    user: {
      type: UserType,
      resolve(parent, args) {}
    }
  })
});

module.exports = BookType;
