import { Link } from "react-router-dom";
import { toMovie } from "../../../../core/config/routes";

const MovieTile = ({movie}) => {
    return (
        <div>
            <Link to={toMovie(movie)}>{movie.title}</Link>
        </div>
    );
}

export default MovieTile;