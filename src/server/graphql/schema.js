const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');

const { packageEndpoint, countEndpoint } = require('../config/api');
const { mapPackageData, mapCountData } = require('../utils');
const { InfoType, CountType } = require('./types');

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    info: {
      type: GraphQLList(InfoType),
      args: {
        packages: { type: GraphQLList(GraphQLString) }
      },
      resolve(parentValue, args) {
        return axios
          .post(packageEndpoint, args.packages)
          .then(res => mapPackageData(res.data))
          .catch(err => {
            throw new Error(err);
          });
      }
    },
    count: {
      type: GraphQLList(CountType),
      args: {
        packages: { type: GraphQLList(GraphQLString) },
        date: { type: GraphQLString }
      },
      resolve(parentValue, { packages, dates }) {
        return axios
          .get(`${countEndpoint}/${dates}/${packages.join(',')}`)
          .then(res => mapCountData(res.data))
          .catch(err => {
            throw new Error(err);
          });
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query
});
