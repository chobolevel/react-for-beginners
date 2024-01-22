function ListItem({ trailer }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${trailer.key}`}
      target="_blank"
      className="trailer-list-item"
    >
      <img
        src={`https://i.ytimg.com/vi/${trailer.key}/hqdefault.jpg`}
        alt={trailer.name}
      />
      <p>{trailer.name}</p>
    </a>
  )
}

export default ListItem
