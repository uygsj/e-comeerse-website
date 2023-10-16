const Movie = (props) => {
    return (
      <>
      <li>
        <h2>{props.title}</h2>
        <h3>{props.releaseDate}</h3>
        <p>{props.openingText}</p>
      </li>
      <div>
      <button onClick={() => props.deteleMovie(props.movieId) }>delete</button>
   </div>
   </>
    );
  };

  export default Movie;

