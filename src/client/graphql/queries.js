import gql from 'graphql-tag';

export const GRAPH_QUERY = gql`
  query getGraphData($p: [String], $d: String) {
    info(packages: $p) {
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

    count(packages: $p, dates: $d) {
      name
      downloads {
        downloads
        day
      }
    }
  }
`;
