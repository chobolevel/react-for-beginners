import { useEffect, useState } from "react"
import MovieDetail from "../../components/movie/Detail"
import { useParams } from "react-router-dom"
import TmdbEnum from "../../enums/TmdbEnum"
import Movie from "../../classes/Movie"

function Detail() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  async function fetchMovieDetail() {
    const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=${TmdbEnum.LANGUAGE}`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=${TmdbEnum.LANGUAGE}`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    )
    const movieJson = await movie.json()
    const videosJson = await videos.json()
    movieJson.videos = videosJson.results
    setMovie(new Movie(movieJson))
  }
  useEffect(() => {
    fetchMovieDetail()
  }, [id])
  return <MovieDetail movie={movie} />
}

export default Detail
