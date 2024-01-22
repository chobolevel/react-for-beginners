function ListItem({ series }) {
  return (
    <div className="series-list-item">
      <img
        className="series-poster"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${series.posterPath}`}
        alt="포스터"
      />
    </div>
  )
}

export default ListItem
