import { Movie } from '../models/Movie';

const BASE_URL = 'https://ghibliapi.herokuapp.com';

export class Ghibli {

  fetchMovies() {
    return fetch(`${BASE_URL}/films`)
      .then(response => response.json())
      .then(data => {
        return data.map(d => new Movie(d))
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
