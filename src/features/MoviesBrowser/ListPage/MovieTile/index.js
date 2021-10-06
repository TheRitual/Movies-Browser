import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Vote from "../../../../common/Vote";
import { toMovie } from "../../../../core/config/routes";
import { selectGenres } from "../../moviesBrowserSlice";
import { 
    StyledMovieTile,
    StyledLink,
    StyledPoster,
    StyledReview,
    ScoreScale,
    VotedScale,
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
            
            <p> Release data: {movie.release_date} </p>
            <p> Genres:&nbsp;
                {movie.genre_ids && movie.genre_ids.map(genre => (
                        <span key={genre}>
                            [{getGenre(genre)}]
                        </span>
                ))}
            </p>

            <StyledReview>
                {/* <StyledStar
                src={starIcon}
                alt="star"
                /> */}
            <ScoreScale>
            {movie.vote_average}&nbsp;
            </ScoreScale>

            <VotedScale>
            {movie.vote_count} 
            </VotedScale>
            </StyledReview>
        </StyledMovieTile>
    );
}

export default MovieTile;