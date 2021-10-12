import { useSelector } from "react-redux";
import Vote from "../../../../common/Vote";
import { toMovie } from "../../../../core/config/routes";
import { selectGenres } from "../../moviesBrowserSlice";
import { 
    StyledMovieTile,
    StyledLink,
    StyledPoster,
    Tags,
    Tag,
    ExtraData,
 } from "./styled";

const MovieTile = ({ movie }) => {
    const genres = useSelector(selectGenres);
    const getGenre = id => genres.find(genre => genre.id === id).name;
    return (
        <StyledMovieTile>
            <StyledLink
            to={toMovie(movie)}>
                <StyledPoster
                    alt={movie.title} src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
                    {movie.title}
            </StyledLink>
            
            <ExtraData> {new Date(movie.release_date).getFullYear()} </ExtraData>
            <Tags>
                {movie.genre_ids && movie.genre_ids.map(genre => (
                        <Tag key={genre}>
                            {getGenre(genre)}
                        </Tag>
                ))}
            </Tags>
            
            <Vote average={movie.vote_average} count={movie.vote_count}  />
        </StyledMovieTile>
    );
}

export default MovieTile;