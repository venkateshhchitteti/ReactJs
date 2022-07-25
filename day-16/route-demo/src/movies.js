import { Link} from "react-router-dom";
function MovieList({ movies }) {
    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`./${movie.id}`}>{movie.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }