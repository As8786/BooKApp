const graphQL = require("graphql");
const { GraphQLID, GraphQLObjectType, GraphQLString, GraphQLInt } = graphQL;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    name: { type: GraphQLString }
  })
});

module.exports = UserType;
