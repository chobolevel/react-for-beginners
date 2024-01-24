import PropTypes from 'prop-types'
import { useState } from 'react'
import CastListItem from './ListItem'

List.propTypes = {
  castList: PropTypes.array.isRequired,
}

function List({ castList }) {
  const [x, setX] = useState(0)
  const getMaxWidth = () => {
    const $castListContent = document.querySelector('.cast-list-content')
    const viewWidth = getComputedStyle($castListContent).width.replace('px', '')
    const width = getComputedStyle($castListContent.childNodes[0]).width.substring(
      0,
      getComputedStyle($castListContent.childNodes[0]).width.indexOf('px')
    )
    const cnt = $castListContent.childNodes.length
    return ((width * cnt - viewWidth) / viewWidth) * 100
  }
  const handlePrev = () => {
    setX((cur) => (cur <= 100 ? 0 : cur - 100))
  }
  const handleNext = () => {
    setX((cur) => (cur + 100 >= getMaxWidth() ? getMaxWidth() : cur + 100))
  }
  return (
    <div className="cast-list">
      <p className="cast-list-title">캐스팅</p>
      <div className="cast-list-inner">
        <div className="prev-btn" onClick={handlePrev}>
          {'<'}
        </div>
        <div className="cast-list-content" style={{ transform: `translateX(-${x}%)` }}>
          {castList?.map((cast) => (
            <CastListItem key={cast.credit_id} cast={cast} />
          ))}
        </div>
        <div className="next-btn" onClick={handleNext}>
          {'>'}
        </div>
      </div>
    </div>
  )
}

export default List
