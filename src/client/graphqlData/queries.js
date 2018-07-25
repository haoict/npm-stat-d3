import gql from 'graphql-tag';

export const GRAPH_DATA_QUERY = gql`
  query getGraphData($packages: [String], $date: String) {
    count(packages: $packages, date: $date) {
      name
      downloads {
        downloads
        day
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
