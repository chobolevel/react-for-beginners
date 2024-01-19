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
  const handlePrev = () => {
    setX((cur) => (cur <= 0 ? 0 : cur - 100));
  };
  const handleNext = () => {
    setX((cur) => (cur >= 100 ? 184 : cur + 100));
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
