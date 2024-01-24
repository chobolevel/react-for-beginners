import { Link } from 'react-router-dom'

const GridListItem = ({ movie }) => {
  return (
    <div className="grid-list-item">
      <Link to={`/movie/${movie.id}`} className="grid-list-item-inner">
        <img src={movie.posterPath} alt={movie.title} title={movie.title} />
      </Link>
    </div>
  )
}

export default GridListItem
