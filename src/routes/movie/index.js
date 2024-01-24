import { useEffect, useRef, useState } from 'react'
import TmdbEnum from '../../enums/TmdbEnum'
import Movie from '../../classes/Movie'
import GridList from '../../components/movie/GridList'

function List() {
  const isMounted = useRef(false)
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('popular')
  const [page, setPage] = useState(1)
  const [popularMovieList, setPopularMovieList] = useState([])
  const [topRatedMoiveList, setTopRatedMovieList] = useState([])
  const fetchPopularMovieList = async (page) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=${TmdbEnum.LANGUAGE}&region=${TmdbEnum.REGION}&page=${page}&limit=20`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    json.results.length === 0
      ? alert('더 이상 정보를 불러올 수 없습니다.')
      : page === 1
      ? setPopularMovieList(json.results.map((movie) => new Movie(movie)))
      : setPopularMovieList((cur) => [...cur, ...json.results.map((movie) => new Movie(movie))])
  }
  const fetchTopRatedMovieList = async (page) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=${TmdbEnum.LANGUAGE}&region=${TmdbEnum.REGION}&page=${page}&limit=20`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    page === 1
      ? setTopRatedMovieList(json.results.map((movie) => new Movie(movie)))
      : setTopRatedMovieList((cur) => [...cur, ...json.results.map((movie) => new Movie(movie))])
  }
  const handleCategoryCheck = (e) => {
    setPage(1)
    fetchPopularMovieList(1)
    fetchTopRatedMovieList(1)
    setCategory(e.target.value)
  }
  const handleLoadBtnClick = (e) => {
    setPage((cur) => cur + 1)
  }
  useEffect(() => {
    setLoading(true)
    fetchPopularMovieList(1)
    fetchTopRatedMovieList(1)
    setLoading(false)
  }, [])
  useEffect(() => {
    if (isMounted.current) {
      switch (category) {
        case 'popular':
          fetchPopularMovieList(page)
          break
        case 'rating':
          fetchTopRatedMovieList(page)
          break
        default:
          break
      }
    } else {
      isMounted.current = true
    }
  }, [page])
  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className="grid-list-wrapper">
          <div className="grid-list-inner">
            <div className="input-select-area">
              <div className="input-item">
                <input
                  type="radio"
                  name="category"
                  id="popular"
                  value="popular"
                  onChange={handleCategoryCheck}
                  checked={category === 'popular'}
                />
                <label htmlFor="popular">현재 인기 영화</label>
              </div>
              <div className="input-item">
                <input
                  type="radio"
                  name="category"
                  id="rating"
                  value="rating"
                  onChange={handleCategoryCheck}
                  checked={category === 'rating'}
                />
                <label htmlFor="rating">역대 인기 영화</label>
              </div>
            </div>
            {category === 'popular' ? <GridList movieList={popularMovieList} /> : null}
            {category === 'rating' ? <GridList movieList={topRatedMoiveList} /> : null}
            <button className="load-more-btn" onClick={handleLoadBtnClick}>
              더보기
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default List
