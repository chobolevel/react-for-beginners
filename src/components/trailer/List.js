import PropTypes from "prop-types"
import { useState } from "react"
import TrailerListItem from "./ListItem"

List.propTypes = {
  trailerList: PropTypes.array.isRequired,
}

function List({ trailerList }) {
  const [x, setX] = useState(0)
  const getMaxWidth = () => {
    const $trailerListContent = document.querySelector(".trailer-list-content")
    const viewWidth = getComputedStyle($trailerListContent).width.replace(
      "px",
      ""
    )
    const width = getComputedStyle(
      $trailerListContent.childNodes[0]
    ).width.substring(
      0,
      getComputedStyle($trailerListContent.childNodes[0]).width.indexOf("px")
    )
    const cnt = $trailerListContent.childNodes.length
    return ((width * cnt - viewWidth) / viewWidth) * 100
  }
  const handlePrev = () => {
    setX((cur) => (cur <= 100 ? 0 : cur - 100))
  }
  const handleNext = () => {
    setX((cur) => (cur + 100 >= getMaxWidth() ? getMaxWidth() : cur + 100))
  }
  return (
    <div className="trailer-list">
      <p className="trailer-list-title">트레일러</p>
      <div className="trailer-list-inner">
        <div className="prev-btn" onClick={handlePrev}>
          {"<"}
        </div>
        <div
          className="trailer-list-content"
          style={{ transform: `translateX(-${x}%)` }}
        >
          {trailerList.map((trailer) => (
            <TrailerListItem key={trailer.id} trailer={trailer} />
          ))}
        </div>
        <div className="next-btn" onClick={handleNext}>
          {">"}
        </div>
      </div>
    </div>
  )
}

export default List
