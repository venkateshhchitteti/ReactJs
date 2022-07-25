import { Link, useParams } from "react-router-dom";
import { movies } from "./App";

  export function MovieList({ movies }) {
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
   
  class Movie{
    constructor(id,type,name,description){
        this.id=id;
        this.type=type;
        this.name=name;
        this.description=description;
    }
  }

  export default Movie;

  export function MovieDetail() {
    let { id } = useParams();
    id = Number(id);
    const movie = movies.find((movie) => movie.id === id);
  
    return (
      <div>
        <h3>{movie.name}</h3>
        <p>{movie.description}</p>
      </div>
    );
  }