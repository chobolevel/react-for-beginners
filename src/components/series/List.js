import ListItem from "./ListItem";
import PropTypes from "prop-types";
import Series from "../../classes/Series";

List.propTypes = {
  seriesList: PropTypes.arrayOf(Series).isRequired,
};

function List({ seriesList }) {
  return (
    <div>
      {seriesList.map((series) => (
        <ListItem key={series.id} series={series} />
      ))}
    </div>
  );
}

export default List;
