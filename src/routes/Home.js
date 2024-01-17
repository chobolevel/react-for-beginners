import { useEffect, useState } from "react";
import MovieList from "../components/movie/List";
import TmdbEnum from "../enums/TmdbEnum";
import Movie from "../classes/Movie";
import SeriesList from "../components/series/List";
import Series from "../classes/Series";

function Home() {
  const [loading, setLoading] = useState(false);
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [topRatedMovieList, setTopRatedMovieList] = useState([]);
  const [popularSeriesList, setPopularSeriesList] = useState([]);
  const [topRatedSeriesList, setTopRatedSeriesList] = useState([]);
  async function fetchPopularMovieList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${TmdbEnum.LANGUAGE}&page=1&limit=20`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    );
    const json = await res.json();
    setPopularMovieList(json.results.map((movie) => new Movie(movie)));
  }
  async function fetchTopRatedMovieList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=${TmdbEnum.LANGUAGE}&page=1&limit=20`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    );
    const json = await res.json();
    setTopRatedMovieList(json.results.map((movie) => new Movie(movie)));
  }
  async function fetchPopularSeriesList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=${TmdbEnum.LANGUAGE}&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    );
    const json = await res.json();
    setPopularSeriesList(json.results.map((series) => new Series(series)));
  }
  async function fetchTopRatedSeriesList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=${TmdbEnum.LANGUAGE}&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_TMDB_ACCESS_TOKEN,
        },
      }
    );
    const json = await res.json();
    setTopRatedSeriesList(json.results.map((series) => new Series(series)));
  }
  useEffect(() => {
    setLoading(true);
    fetchPopularMovieList();
    fetchTopRatedMovieList();
    fetchPopularSeriesList();
    fetchTopRatedSeriesList();
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? "loading..." : null}
      <div className="vignette-area">
        <div className="vignette-layer">
          <img
            className="vignette-img"
            src={require("../assets/img/main-advertise-title.webp")}
            alt="클릭 포스터"
          />
          <p className="vignette-info">
            과로에 시달리는 마이클 뉴먼은 인생의 장면들을 잠시 정지하고
            빨리감기할 수 있는 리모컨을 우연히 발견하는데...
          </p>
          <button className="vignette-btn">재생하기</button>
        </div>
      </div>
      <MovieList title={"인기있는 영화"} movieList={popularMovieList} />
      <MovieList title={"역대 최고의 영화"} movieList={topRatedMovieList} />
      <SeriesList title={"인기있는 시리즈"} seriesList={popularSeriesList} />
      <SeriesList
        title={"역대 최고의 시리즈"}
        seriesList={topRatedSeriesList}
      />
    </>
  );
}

export default Home;
