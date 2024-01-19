import ListItem from "./ListItem";
import Movie from "../../classes/Movie";
import PropTypes from "prop-types";
import { useState } from "react";

List.propTypes = {
  title: PropTypes.string.isRequired,
  movieList: PropTypes.arrayOf(PropTypes.instanceOf(Movie)).isRequired,
};

function List({ title, movieList }) {
  const [x, setX] = useState(0);
  const handlePrev = () => {
    setX((cur) => (cur <= 0 ? 0 : cur - 100));
  };
  const handleNext = () => {
    setX((cur) => (cur >= 100 ? 184 : cur + 100));
  };
  return (
    <div className="movie-list">
      <p className="movie-list-title">{title}</p>
      <div className="movie-list-inner">
        <div className="prev-btn" onClick={handlePrev}>
          {"<"}
        </div>
        <div
          className="movie-list-content"
          style={{ transform: `translateX(-${x}%)` }}
        >
          {movieList.map((movie) => (
            <ListItem key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="next-btn" onClick={handleNext}>
          {">"}
        </div>
      </div>
    </div>
  );
}

export default List;
