function ModalDetail({ series }) {
  return (
    <div className="series-detail-modal">
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${series.posterPath}`}
        alt="시리즈 이미지"
      />
      <p>{series.name}</p>
      <p>{series.overview}</p>
      <p>{series.isAdult}</p>
      <p>{series.firstAirDate}</p>
      <p>
        {Math.round(series.voteAverage * 10)}({series.voteCount})
      </p>
    </div>
  )
}

export default ModalDetail
