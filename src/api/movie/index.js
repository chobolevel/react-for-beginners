import TmdbEnum from '../../enums/TmdbEnum'
import Movie from '../../classes/Movie'

export const fetchNowPlayingMovieList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=${TmdbEnum.LANGUAGE}&page=${page}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json.results?.map((movie) => new Movie(movie))
}

export const fetchPopularMovieList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=${TmdbEnum.LANGUAGE}&page=${page}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json.results.map((movie) => new Movie(movie))
}

export const fetchTopRatedMovieList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=${TmdbEnum.LANGUAGE}&page=${page}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json.results.map((movie) => new Movie(movie))
}

export const fetchUpcomingMovieList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=${TmdbEnum.LANGUAGE}&page=${page}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json.results?.map((movie) => new Movie(movie))
}

export const fetchMovieDetail = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=${TmdbEnum.LANGUAGE}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json
}

export const fetchMovieTrailerList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=${TmdbEnum.LANGUAGE}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json
}

export const fetchRecommendationMovieList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=${TmdbEnum.LANGUAGE}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json.results.map((movie) => new Movie(movie))
}

export const fetchSimilarMovieList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=${TmdbEnum.LANGUAGE}`,
    {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    }
  )
  const json = await res.json()
  return json.results.map((movie) => new Movie(movie))
}
