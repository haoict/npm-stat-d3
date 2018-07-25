import gql from 'graphql-tag';

export const GRAPH_QUERY = gql`
  query getGraphData($packages: [String], $date: String) {
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

    count(packages: $packages, date: $date) {
      name
      downloads {
        downloads
        day
      }
    }
  }
`;
