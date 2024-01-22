import { Link } from "react-router-dom"

function ListItem({ movie }) {
  return (
    <Link to={"/movie/" + movie.id} className="movie-list-item">
      <img className="movie-poster" src={movie.posterPath} alt="포스터" />
    </Link>
  )
}

export default ListItem
