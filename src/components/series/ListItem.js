import { Link } from "react-router-dom"

function ListItem({ series }) {
  return (
    <Link to={`/series/${series.id}`} className="series-list-item">
      <img
        className="series-poster"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${series.posterPath}`}
        alt="포스터"
      />
    </Link>
  )
}

export default ListItem
