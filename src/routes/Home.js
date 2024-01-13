import { useEffect, useState } from "react";
import List from "../components/movie/List";
import MovieEnum from "../enums/MovieEnum";
import Movie from "../classes/Movie";

function Home() {
  const [loading, setLoading] = useState(false);
  const [popularMovieList, setPopularMovieList] = useState([]);
  async function fetchPopularMovieList() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${MovieEnum.LANGUAGE}&page=1&limit=20`,
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
  useEffect(() => {
    setLoading(true);
    fetchPopularMovieList();
    setLoading(false);
  }, []);
  return (
    <div className="inner">
      {loading ? "loading..." : null}
      <List movieList={popularMovieList} />
    </div>
  );
}

export default Home;
