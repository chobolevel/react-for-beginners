import TmdbEnum from '../../enums/TmdbEnum'

export const fetchAiringTodaySeriesList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/airing_today?language=${TmdbEnum.LANGUAGE}&page=${page}`,
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

export const fetchOnTheAirSeriesList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?language=${TmdbEnum.LANGUAGE}&page=${page}`,
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

export const fetchPopularSeriesList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=${TmdbEnum.LANGUAGE}&page=${page}`,
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

export const fetchTopRatedSeriesList = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?language=${TmdbEnum.LANGUAGE}&page=${page}`,
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

export const fetchSeriesDetail = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=${TmdbEnum.LANGUAGE}`,
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

export const fetchSeriesTrailerList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?language=${TmdbEnum.LANGUAGE}`,
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

export const fetchRecommendationSeriesList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?language=${TmdbEnum.LANGUAGE}`,
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

export const fetchSimilarSeriesList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?language=${TmdbEnum.LANGUAGE}`,
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
