import moment from "moment";

class Series {
  constructor(series) {
    this.id = series.id;
    this.posterPath = series.poster_path;
    this.name = series.name;
    this.overview = series.overview;
    this.isAdult = series.adult;
    this.firstAirDate = moment(series.first_air_date).format(
      "YYYY년 MM월 DD일"
    );
    this.popularity = series.popularity;
    this.voteCount = series.vote_count;
    this.voteAverage = series.vote_average;
  }
}

export default Series;
