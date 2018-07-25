const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

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

module.exports = {
  InfoType,
  CountType
};
