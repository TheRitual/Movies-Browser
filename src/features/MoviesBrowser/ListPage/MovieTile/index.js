import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Vote from "../../../../common/Vote";
import { toMovie } from "../../../../core/config/routes";
import { selectGenres } from "../../moviesBrowserSlice";

const MovieTile = ({ movie }) => {
    const genres = useSelector(selectGenres);
    const getGenre = id => genres.find(genre => genre.id === id).name;
    return (
        <div>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
            <p><Link to={toMovie(movie)}>{movie.title}</Link></p>
            <p> Release data: {movie.release_date} </p>
            <p> Genres:&nbsp;
                {movie.genre_ids && movie.genre_ids.map(genre => (
                        <span key={genre}>
                            [{getGenre(genre)}]
                        </span>
                ))}
            </p>
            <p><Vote score={movie.vote_average} count={movie.vote_count} /></p>
        </div>
    );
}

export default MovieTile;