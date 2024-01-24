import GridListItem from './GridListItem'
import PropTypes from 'prop-types'
import Movie from '../../classes/Movie'

GridList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.instanceOf(Movie)).isRequired,
}

function GridList({ movieList }) {
  return (
    <div className="grid-list-content">
      <div className="grid-list-inner">
        {movieList.map((movie) => (
          <GridListItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}
export default GridList
