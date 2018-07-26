const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

const { fetchCount, fetchInfo } = require('../utils');
const { InfoType, CountType } = require('./types');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    info: {
      type: GraphQLList(InfoType),
      args: {
        packages: { type: GraphQLList(GraphQLString) }
      },
      resolve(parentValue, { packages }) {
        return fetchInfo(packages);
      }
    },
    count: {
      type: GraphQLList(CountType),
      args: {
        packages: { type: GraphQLList(GraphQLString) },
        months: { type: GraphQLInt }
      },
      resolve(parentValue, { packages, months }) {
        return fetchCount(packages, months);
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query
});
