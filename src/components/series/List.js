import ListItem from "./ListItem";
import PropTypes from "prop-types";
import Series from "../../classes/Series";
import { useState } from "react";

List.propTypes = {
  title: PropTypes.string.isRequired,
  seriesList: PropTypes.arrayOf(PropTypes.instanceOf(Series)).isRequired,
};

function List({ title, seriesList }) {
  const [x, setX] = useState(0);
  const getMaxWidth = () => {
    const $seriesListContent = document.querySelector('.series-list-content')
    const viewWidth = getComputedStyle($seriesListContent).width.replace("px", "")
    const width = getComputedStyle($seriesListContent.childNodes[0]).width.substring(0, getComputedStyle($seriesListContent.childNodes[0]).width.indexOf('px'))
    const cnt = $seriesListContent.childNodes.length
    return (width * cnt - viewWidth) / viewWidth * 100
  }
  const handlePrev = () => {
    setX((cur) => cur <= 0 ? cur : cur - 100);
  };
  const handleNext = () => {
    setX((cur) => cur + 100 >= getMaxWidth() ? getMaxWidth() : cur + 100);
  };
  return (
    <div className="series-list">
      <p className="series-list-title">{title}</p>
      <div className="series-list-inner">
        <div className="prev-btn" onClick={handlePrev}>
          {"<"}
        </div>
        <div
          className="series-list-content"
          style={{ transform: `translateX(-${x}%)` }}
        >
          {seriesList.map((series) => (
            <ListItem key={series.id} series={series} />
          ))}
        </div>
        <div className="next-btn" onClick={handleNext}>
          {">"}
        </div>
      </div>
    </div>
  );
}

export default List;
