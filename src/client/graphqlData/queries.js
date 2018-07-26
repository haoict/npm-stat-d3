import gql from 'graphql-tag';

export const GRAPH_DATA_QUERY = gql`
  query getGraphData($packages: [String], $months: Int) {
    count(packages: $packages, months: $months) {
      id
      data {
        x
        y
      }
    }
  }
`;

export const PACKAGES_INFO_QUERY = gql`
  query getPackagesInfo($packages: [String]) {
    info(packages: $packages) {
      name
      update
      author
      github {
        homepage
        starsCount
        forksCount
        openCount
      }
    }
  }
`;
