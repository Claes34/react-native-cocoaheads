import gql from 'graphql-tag';

const FetchMoviesQuery = gql`
  query FetchMoviesQuery {
    films {
      id
      title
      picture_url
      release_date
      rt_score
    }
  }
`;

const FetchMovieDetailsQuery = gql`
  query FetchMovieDetailsQuery($id: ID!) {
    film(id: $id) {
      title
      description
      release_date
      director
      producer
      rt_score
      picture_url
      peoples(limit: 5) {
        id
        name
        specie {
          id
          name
        }
      }
    }
  }
`;

export {
  FetchMoviesQuery,
  FetchMovieDetailsQuery
}
