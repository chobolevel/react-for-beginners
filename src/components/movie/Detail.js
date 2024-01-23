function Detail({ movie }) {
  const handlePosterError = (e) => {
    e.target.src = require("../../assets/img/default-poster-img.jpg")
  }
  return (
    <div className="movie-detail-wrapper">
      <div
        className="movie-detail-inner"
        style={{ background: `url(${movie.backDropPath})` }}
      >
        <div className="movie-detail-poster">
          <img
            src={movie.posterPath}
            alt={movie.title}
            onError={handlePosterError}
          />
        </div>
        <div className="movie-detail-info">
          <p className="movie-title">{movie.title}</p>
          <p>{movie.overview}</p>
          <p>
            <span>개봉일자</span>
            <span>{movie.releaseDate}</span>
          </p>
          <p>
            <span>런타임</span>
            <span>{movie.runtime}</span>
          </p>
          <p>
            <span>관람 연령</span>
            <span>{movie.isAdult ? "성인 관람가" : "전체 관람가"}</span>
          </p>
          <p>
            <span>장르</span>
            <span>{movie.genres?.join(", ")}</span>
          </p>
          <p>
            <span>추천율</span>
            <span>
              {movie.voteAverage}%({movie.voteCount})
            </span>
          </p>
          <p>
            <span>제작사</span>
            <span>{movie.companies?.map((c) => c.name).join(", ")}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detail
