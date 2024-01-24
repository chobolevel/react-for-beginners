import { useEffect, useState } from 'react'
import MovieList from '../components/movie/List'
import TmdbEnum from '../enums/TmdbEnum'
import Movie from '../classes/Movie'
import SeriesList from '../components/series/List'
import Series from '../classes/Series'
import moment from 'moment'

function Home() {
  const [loading, setLoading] = useState(false)
  const [nowPlayingMovieList, setNowPlayingMovieList] = useState([])
  const [upcomingMovieList, setUpcomingMovieList] = useState([])
  const [airingTodaySeriesList, setAiringTodaySeriesList] = useState([])
  const [onTheAirSeriesList, setOnTheAirSeriesList] = useState([])
  const handleClick = () => {
    alert('아직 지원하지 않는 기능입니다.')
  }
  async function fetchNowPlayingMovieList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=${TmdbEnum.LANGUAGE}&region=${TmdbEnum.REGION}&page=1&limit=20`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    setNowPlayingMovieList(json.results.map((movie) => new Movie(movie)))
  }
  async function fetchUpcomingMovieList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=${TmdbEnum.LANGUAGE}&region=${TmdbEnum.REGION}&page=1&limit=20`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    setUpcomingMovieList(json.results.map((movie) => new Movie(movie)))
  }
  async function fetchAiringTodaySeriesList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?language=${
        TmdbEnum.LANGUAGE
      }&page=1&with_origin_country=${TmdbEnum.ORIGIN_COUNTRY}&air_date.gte=${moment().format(
        'YYYY-MM-DD'
      )}&air_date.lte=${moment().format('YYYY-MM-DD')}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    setAiringTodaySeriesList(json.results.map((series) => new Series(series)))
  }
  async function fetchOnTheAirSeriesList() {
    const startThisWeek = moment().startOf('week')
    const firstOfWeek = startThisWeek.add(1, 'day').format('YYYY-MM-DD')
    const lastOfWeek = startThisWeek.add(6, 'day').format('YYYY-MM-DD')
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?language=${TmdbEnum.LANGUAGE}&page=1&with_origin_country=${TmdbEnum.ORIGIN_COUNTRY}&air_date.gte=${firstOfWeek}&air_date.lte=${lastOfWeek}`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    setOnTheAirSeriesList(json.results.map((series) => new Series(series)))
  }
  useEffect(() => {
    setLoading(true)
    fetchNowPlayingMovieList()
    fetchUpcomingMovieList()
    fetchAiringTodaySeriesList()
    fetchOnTheAirSeriesList()
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? 'loading...' : null}
      <div className="vignette-area">
        <div className="vignette-layer">
          <img
            className="vignette-img"
            src={require('../assets/img/main-advertise-title.webp')}
            alt="클릭 포스터"
          />
          <p className="vignette-info">
            과로에 시달리는 마이클 뉴먼은 인생의 장면들을 잠시 정지하고 빨리감기할 수 있는 리모컨을
            우연히 발견하는데...
          </p>
          <button className="vignette-btn" onClick={handleClick}>
            재생하기
          </button>
        </div>
      </div>
      <MovieList title={'현재 상영 중인 영화'} movieList={nowPlayingMovieList} />
      <MovieList title={'한국에서 상영 예정인 영화'} movieList={upcomingMovieList} />
      <SeriesList title={'오늘 방송하는 시리즈'} seriesList={airingTodaySeriesList} />
      <SeriesList title={'이번주 방송되는 시리즈'} seriesList={onTheAirSeriesList} />
    </>
  )
}

export default Home
