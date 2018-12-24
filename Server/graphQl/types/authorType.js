const graphQL = require("graphql");
const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const AuthorType = new GraphQLObjectType({
  name: "AuthorType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    summary: { type: GraphQLString },
    review: { type: GraphQLString }
  })
});

module.exports = AuthorType;
