import { Link } from 'react-router-dom'

function ListItem({ movie }) {
  const handlePosterError = (e) => {
    e.target.src = require('../../assets/img/default-poster-img.jpg')
  }
  return (
    <Link to={'/movie/' + movie.id} className="movie-list-item">
      <img
        className="movie-poster"
        src={movie.posterPath}
        alt="포스터"
        onError={handlePosterError}
        title={movie.title}
      />
    </Link>
  )
}

export default ListItem
