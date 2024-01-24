import { Link } from 'react-router-dom'

const GridListItem = ({ series }) => {
  return (
    <div className="grid-list-item">
      <Link to={`/series/${series.id}`} className="grid-list-item-inner">
        <img src={series.posterPath} alt={series.name} title={series.name} />
      </Link>
    </div>
  )
}

export default GridListItem
