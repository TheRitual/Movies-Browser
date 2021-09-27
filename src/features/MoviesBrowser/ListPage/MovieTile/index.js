import { Link } from "react-router-dom";

const MovieTile = ({movie}) => {
    return (
        <div>
            <Link to={movie}>{movie.title}</Link>
        </div>
    );
}

export default MovieTile;