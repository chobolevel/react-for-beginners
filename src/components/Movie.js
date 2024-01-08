import PropTypes from "prop-types";

function Movie({ coverImgPath, title, summary, genres }) {
  return (
    <div>
      <img src={coverImgPath} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
