import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    navigate("/")
  }
  return (
    <div className="error-page-wrapper">
      <div className="error-page-inner">
        <p className="error-title">🚨링크에 문제가 발생했습니다.🚨</p>
        <p className="error-info">
          페이지가 존재하지 않습니다. InJae 웹사이트를 계속해서 둘러보세요.
        </p>
        <button onClick={handleClick}>홈으로 이동</button>
      </div>
    </div>
  )
}

export default NotFound
