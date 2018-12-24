const graphQL = require("graphql");
const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const PublisherType = new GraphQLObjectType({
  name: "PublisherType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    summary: { type: GraphQLString },
    review: { type: GraphQLString }
  })
});

module.exports = PublisherType;
