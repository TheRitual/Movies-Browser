import { Link } from "react-router-dom";
import Vote from "../../../../common/Vote";
import { toMovie } from "../../../../core/config/routes";
import { StyledMovieTile } from "./styled";

const MovieTile = ({ movie }) => {
    return (
        <StyledMovieTile>
            <div>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
            <p><Link to={toMovie(movie)}>{movie.title}</Link></p>
            <p> Release data: {movie.release_date} </p>
            <p> Genres:&nbsp;
                {movie.genre_ids && movie.genre_ids.map(genre => (
                    <span key={genre}>
                        [{genre}] 
                    </span>
                ))}
            </p>
            <p><Vote score={movie.vote_average} count={movie.vote_count} /></p>
        </div>
        </StyledMovieTile>
    );
}

export default MovieTile;