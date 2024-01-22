import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../../components/movie/Detail"
import MovieList from "../../components/movie/List"
import TrailerList from "../../components/trailer/List"
import TmdbEnum from "../../enums/TmdbEnum"
import Movie from "../../classes/Movie"

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [trailerList, setTrailerList] = useState([])
  const [similarMovieList, setSimilarMovieList] = useState([])
  const [recommendationMovieList, setRecommendationMovieList] = useState([])
  async function fetchMovieDetail() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=${TmdbEnum.LANGUAGE}`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )

    const json = await res.json()
    setMovie(new Movie(json))
  }
  async function fetchTrailerList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=${TmdbEnum.LANGUAGE}`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    setTrailerList(json.results)
  }
  async function fetchSimilarMovieList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=${TmdbEnum.LANGUAGE}`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    setSimilarMovieList(json.results.map((movie) => new Movie(movie)))
  }
  async function fetchRecommendationMovieList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=${TmdbEnum.LANGUAGE}`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const json = await res.json()
    setRecommendationMovieList(json.results.map((movie) => new Movie(movie)))
  }
  useEffect(() => {
    fetchMovieDetail()
    fetchTrailerList()
    fetchSimilarMovieList()
    fetchRecommendationMovieList()
  }, [id])
  return (
    <>
      <MovieDetail movie={movie} />
      {trailerList.length !== 0 ? (
        <TrailerList trailerList={trailerList} />
      ) : null}
      {similarMovieList.length !== 0 ? (
        <MovieList title={"비슷한 영화"} movieList={similarMovieList} />
      ) : null}
      {recommendationMovieList.length !== 0 ? (
        <MovieList title={"추천 영화"} movieList={recommendationMovieList} />
      ) : null}
    </>
  )
}

export default Detail
