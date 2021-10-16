import { useSelector } from "react-redux";
import { Vote } from "../../../../common/Vote";
import { toMovie } from "../../../../core/config/routes";
import { selectGenres } from "../../moviesBrowserSlice";
import MovieDummy from "../../../../assets/images/movie_dummy.svg";
import { 
    StyledMovieTile,
    StyledLink,
    StyledPoster,
    Tags,
    Tag,
    ExtraData,
 } from "./styled";

const MovieTile = ({ movie, showCharacter, showJob }) => {
    const genres = useSelector(selectGenres);
    const getGenre = id => genres.find(genre => genre.id === id).name;
    const imgSrc = movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : MovieDummy;
    const showBracelets = (showJob && movie.job !== "")  || (showCharacter && movie.character !== "");
    return (
        <StyledMovieTile>
            <StyledLink
            to={toMovie(movie)}>
                <StyledPoster
                    alt={movie.title} src={imgSrc} />
                    {movie.title}
            </StyledLink>

            <ExtraData>
                {showCharacter && movie.character}
                {showJob && movie.job}
                {showBracelets && " ("}
                {new Date(movie.release_date).getFullYear()}
                {showBracelets && ")"}
            </ExtraData>

            <Tags>
                {movie.genre_ids && movie.genre_ids.map(genre => (
                        <Tag key={genre}>
                            {getGenre(genre)}
                        </Tag>
                ))}
            </Tags>
            
            <Vote score={movie.vote_average} count={movie.vote_count}  />
        </StyledMovieTile>
    );
}

export default MovieTile;