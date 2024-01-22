function ModalDetail({ movie, onMouseOver, onMouseOut }) {
  return (
    <div className="movie-detail-modal">
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.posterPath}`}
        alt="영화 이미지"
      />
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
      <p>{movie.isAdult}</p>
      <p>{movie.releaseDate}</p>
      <p>
        {Math.round(movie.voteAverage * 10)}({movie.voteCount})
      </p>
    </div>
  )
}

export default ModalDetail
