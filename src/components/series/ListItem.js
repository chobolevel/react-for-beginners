function ListItem({ series }) {
  return (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${series.posterPath}`}
        alt="포스터"
      />
    </div>
  );
}

export default ListItem;
