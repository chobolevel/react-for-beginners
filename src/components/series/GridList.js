import GridListItem from './GridListItem'
import PropTypes from 'prop-types'
import Series from '../../classes/Series'

GridList.propTypes = {
  seriesList: PropTypes.arrayOf(PropTypes.instanceOf(Series)).isRequired,
}

function GridList({ seriesList }) {
  return (
    <div className="grid-list-content">
      <div className="grid-list-inner">
        {seriesList.map((series) => (
          <GridListItem key={series.id} series={series} />
        ))}
      </div>
    </div>
  )
}
export default GridList
