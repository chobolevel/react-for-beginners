import { useState } from "react";
import ModalPortal from "../../Portal";

function ListItem({ movie }) {
  const [timeoutVar, setTimeoutVar] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 1000);
    setTimeoutVar(timeout);
  };
  const handleMouseLeave = () => {
    clearTimeout(timeoutVar);
    setIsActive(false);
  };
  return (
    <div className="movie-list-item">
      <img
        className="movie-poster"
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.posterPath}`}
        alt="포스터"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isActive ? (
        <ModalPortal>
          <h1>hi</h1>
        </ModalPortal>
      ) : null}
    </div>
  );
}

export default ListItem;
