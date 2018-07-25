const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');
const axios = require('axios');

const { packageEndpoint, countEndpoint } = require('../config/api');
const { mapPackageData, mapCountData } = require('../utils');

const GitInfoType = new GraphQLObjectType({
  name: 'GitInfoType',
  fields: () => ({
    homepage: { type: GraphQLString },
    starsCount: { type: GraphQLInt },
    forksCount: { type: GraphQLInt },
    openCount: { type: GraphQLInt }
  })
});

const InfoType = new GraphQLObjectType({
  name: 'InfoType',
  fields: () => ({
    name: { type: GraphQLString },
    update: { type: GraphQLString },
    author: { type: GraphQLString },
    github: { type: GitInfoType }
  })
});

const DownloadType = new GraphQLObjectType({
  name: 'DownloadType',
  fields: () => ({
    downloads: { type: GraphQLInt },
    day: { type: GraphQLString }
  })
});

const CountType = new GraphQLObjectType({
  name: 'CountType',
  fields: () => ({
    name: { type: GraphQLString },
    downloads: { type: GraphQLList(DownloadType) }
  })
});

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
        dates: { type: GraphQLString }
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
