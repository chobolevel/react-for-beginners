import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">home</Link>
      <ul>
        <li>
          <Link to="/movie">영화</Link>
        </li>
        <li>
          <Link to="/series">시리즈</Link>
        </li>
      </ul>
      <ul>
        <li>검색</li>
      </ul>
    </div>
  );
}

export default Header;
