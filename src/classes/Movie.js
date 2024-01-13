import moment from "moment";

export default class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.posterPath = movie.poster_path;
    this.title = movie.title;
    this.overview = movie.overview;
    this.isAdult = movie.adult;
    this.releaseDate = moment(movie.release_date).format("YYYY년 MM월 DD일");
    this.popularity = movie.popularity;
    this.voteCount = movie.vote_count;
    this.voteAverage = movie.vote_average;
  }
}
