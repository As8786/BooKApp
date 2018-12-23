const graphQL = require("graphql");
const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const PublisherType = new GraphQLObjectType({
  name: "PublisherType",
  fields: () => ({
    name: { type: GraphQLString },
    summary: { type: GraphQLString },
    review: { type: GraphQLString }
  })
});

module.exports = PublisherType;
