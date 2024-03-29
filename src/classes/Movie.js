import moment from 'moment'

export default class Movie {
  constructor(movie) {
    this.id = movie.id
    this.posterPath = `https://www.themoviedb.org/t/p/original${movie.poster_path}`
    this.backDropPath = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`
    this.title = movie.title
    this.overview = movie.overview
    this.isAdult = movie.adult
    this.releaseDate = movie.release_dates
      ? moment(
          movie.release_dates.results
            .find((date) => date.iso_3166_1 === 'KR')
            .release_dates.find((date) => date.type === 3).release_date
        ).format('YYYY년 MM월 DD일')
      : moment(movie.release_date).format('YYYY년 MM월 DD일')
    this.popularity = movie.popularity
    this.voteCount = movie.vote_count
    this.voteAverage = Math.round(movie.vote_average * 10)
    this.companies = movie?.production_companies
    this.genres = movie?.genres?.map((g) => g.name)
    this.runtime = movie?.runtime
      ? `${Math.floor(movie.runtime / 60)}시간 ${movie.runtime % 60}분`
      : null
    this.status = movie?.status
    this.voices = movie?.spoken_languages
    this.casts = movie?.credits?.cast.map((cast) => ({
      ...cast,
      profilePath: `https://www.themoviedb.org/t/p/original${cast.profile_path}`,
    }))
  }
}
