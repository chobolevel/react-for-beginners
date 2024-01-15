import ListItem from "./ListItem";
import Movie from "../../classes/Movie";
import PropTypes from "prop-types";

List.propTypes = {
  movieList: PropTypes.arrayOf(Movie).isRequired,
};

function List({ movieList }) {
  return (
    <div>
      {movieList.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default List;
