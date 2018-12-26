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
    review: { type: GraphQLString },
    publicationDate: { type: GraphQLString },
    printLength: { type: GraphQLString },
    publisher: { type: GraphQLString },
    author: { type: GraphQLString },
    userId: { type: GraphQLID },
    image: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {}
    }
  })
});

module.exports = BookType;
