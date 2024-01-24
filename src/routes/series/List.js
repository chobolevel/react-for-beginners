import { useState, useRef, useEffect } from 'react'
import GridList from '../../components/series/GridList'
import TmdbEnum from '../../enums/TmdbEnum'
import Series from '../../classes/Series'

function List() {
  const isMounted = useRef(false)
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('popular')
  const [page, setPage] = useState(1)
  const [popularSeriesList, setPopularSeriesList] = useState([])
  const [topRatedSeriesList, setTopRatedSeriesList] = useState([])
  const fetchPopularSeriesList = async (page) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?language=${TmdbEnum.LANGUAGE}&page=${page}&limit=20&with_origin_country=${TmdbEnum.ORIGIN_COUNTRY}&sort_by=popularity.desc`,
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
      ? setPopularSeriesList(json.results.map((series) => new Series(series)))
      : setPopularSeriesList((cur) => [...cur, ...json.results.map((series) => new Series(series))])
  }
  const fetchTopRatedSeriesList = async (page) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/tv?language=${TmdbEnum.LANGUAGE}&page=${page}&limit=20&with_origin_country=${TmdbEnum.ORIGIN_COUNTRY}&sort_by=vote_average.desc`,
      {
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    page === 1
      ? setTopRatedSeriesList(json.results.map((series) => new Series(series)))
      : setTopRatedSeriesList((cur) => [
          ...cur,
          ...json.results.map((series) => new Series(series)),
        ])
  }
  const handleCategoryCheck = (e) => {
    setPage(1)
    fetchPopularSeriesList(1)
    fetchTopRatedSeriesList(1)
    setCategory(e.target.value)
  }
  const handleLoadBtnClick = (e) => {
    setPage((cur) => cur + 1)
  }
  useEffect(() => {
    setLoading(true)
    fetchPopularSeriesList(1)
    fetchTopRatedSeriesList(1)
    setLoading(false)
  }, [])
  useEffect(() => {
    if (isMounted.current) {
      switch (category) {
        case 'popular':
          fetchPopularSeriesList(page)
          break
        case 'rating':
          fetchTopRatedSeriesList(page)
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
                <label htmlFor="popular">현재 인기 시리즈</label>
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
                <label htmlFor="rating">역대 인기 시리즈</label>
              </div>
            </div>
            {category === 'popular' ? <GridList seriesList={popularSeriesList} /> : null}
            {category === 'rating' ? <GridList seriesList={topRatedSeriesList} /> : null}
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
