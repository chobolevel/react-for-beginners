function ListItem({ movie }) {
  return (
    <div className="movie-list-item">
      <img
        className="movie-poster"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.posterPath}`}
        alt="포스터"
      />
    </div>
  );
}

export default ListItem;
