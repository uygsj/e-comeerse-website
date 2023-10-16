import Movie from "./M";

const MovieList = (props) => {
    return (
      <>
      <ul>
        {props.movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            movieId = {movie.id}
            deteleMovie = {props.onDeleteMovie}
          />
        ))}
      </ul>

      </>
    );
  };

  export default MovieList;