const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql');
const axios = require('axios');

const { packageEndpoint } = require('../config/api');
const { mapPackageData } = require('../utils');

const PackageInfoType = new GraphQLObjectType({
  name: 'PackageInfoType',
  fields: () => ({
    name: { type: GraphQLString },
    update: { type: GraphQLString }
  })
});

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    packageInfos: {
      type: GraphQLList(PackageInfoType),
      args: {
        packages: { type: GraphQLList(GraphQLString) }
      },
      resolve(parentValue, args) {
        return axios
          .post(packageEndpoint, args.packages)
          .then(res => {
            return mapPackageData(res.data);
          })
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
