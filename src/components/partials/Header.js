import { Link } from 'react-router-dom'

function Header({ isTop }) {
  const handleClick = (e) => {
    e.preventDefault()
    alert('아직 지원하지 않는 기능입니다.\n추후 지원 예정입니다.')
  }
  return (
    <div className={isTop ? 'header-wrapper top-position' : 'header-wrapper'}>
      <div className="header-inner">
        <ul>
          <li>
            <Link to="/">InJae</Link>
          </li>
          <li>
            <Link to="/movie" onClick={handleClick}>
              영화
            </Link>
          </li>
          <li>
            <Link to="/series" onClick={handleClick}>
              시리즈
            </Link>
          </li>
        </ul>
        <ul>
          <li onClick={handleClick}>검색</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
