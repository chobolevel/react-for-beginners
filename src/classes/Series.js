import moment from "moment"

class Series {
  constructor(series) {
    this.id = series.id
    this.posterPath = `https://www.themoviedb.org/t/p/original${series.poster_path}`
    this.backDropPath = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${series.backdrop_path}`
    this.name = series.name
    this.overview = series.overview
    this.isAdult = series.adult
    this.firstAirDate = moment(series.first_air_date).format("YYYY년 MM월 DD일")
    this.popularity = series.popularity
    this.voteCount = series.vote_count
    this.voteAverage = Math.round(series.vote_average * 10)
    this.companies = series?.production_companies
    this.genres = series?.genres?.map((g) => g.name)
    this.runtime = series?.runtime
      ? `${Math.floor(series.runtime / 60)}시간 ${series.runtime % 60}분`
      : null
    this.status = series?.status
    this.voices = series?.spoken_languages
    this.seasons = series?.seasons
    this.seasonCnt = series?.number_of_seasons
    this.episodeCnt = series?.number_of_episodes
  }
}

export default Series
