import { useState, useEffect } from 'react'
import SeriesDetail from '../../components/series/Detail'
import TrailerList from '../../components/trailer/List'
import SeriesList from '../../components/series/List'
import TmdbEnum from '../../enums/TmdbEnum'
import { useParams } from 'react-router-dom'
import Series from '../../classes/Series'

function Detail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [series, setSeries] = useState({})
  const [trailerList, setTrailerList] = useState([])
  const [similarSeriesList, setSimilarSeriesList] = useState([])
  const [recommendationSeriesList, setRecommendationSeriesList] = useState([])
  async function fetchSeriesDetail() {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=${TmdbEnum.LANGUAGE}`, {
      headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
      },
    })
    const json = await res.json()
    setSeries(new Series(json))
  }
  async function fetchTrailerList() {
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
    setTrailerList(json.results)
  }
  async function fetchSimilarSeriesList() {
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
    setSimilarSeriesList(json.results.map((series) => new Series(series)))
  }
  async function fetchRecommendationSeriesList() {
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
    setRecommendationSeriesList(json.results.map((series) => new Series(series)))
  }
  useEffect(() => {
    setLoading(true)
    fetchSeriesDetail()
    fetchTrailerList()
    fetchSimilarSeriesList()
    fetchRecommendationSeriesList()
    setLoading(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])
  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <>
          <SeriesDetail series={series} />
          {trailerList.length !== 0 ? <TrailerList trailerList={trailerList} /> : null}
          {similarSeriesList.length !== 0 ? (
            <SeriesList title={'비슷한 시리즈'} seriesList={similarSeriesList} />
          ) : null}
          {recommendationSeriesList.length !== 0 ? (
            <SeriesList title={'추천 시리즈'} seriesList={recommendationSeriesList} />
          ) : null}
        </>
      )}
    </>
  )
}

export default Detail
