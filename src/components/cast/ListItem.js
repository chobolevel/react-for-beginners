function ListItem({ cast }) {
  const handlePosterError = (e) => {
    e.target.src = require('../../assets/img/default-poster-img.jpg')
  }
  return (
    <div className="cast-list-item">
      <img src={cast.profilePath} alt={cast.name} onError={handlePosterError} />
      <p>{cast.name}</p>
    </div>
  )
}

export default ListItem
