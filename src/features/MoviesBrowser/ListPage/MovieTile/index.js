
import Vote from "../../../../common/Vote";
import { toMovie } from "../../../../core/config/routes";
import { 
    StyledMovieTile,
    StyledLink,
    StyledPoster,
    StyledReview,
 } from "./styled";


const MovieTile = ({ movie }) => {
    return (
        <StyledMovieTile>
            <StyledLink
            to={toMovie(movie)}>
                <StyledPoster
                    alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />

            
            {movie.title}
            </StyledLink>
            
            <p> Release data: {movie.release_date} </p>
            <p> Genres:&nbsp;
                {movie.genre_ids && movie.genre_ids.map(genre => (
                    <span key={genre}>
                        [{genre}] 
                    </span>
                ))}
            </p>

            <StyledReview>
                {/* <StyledStar
                src={starIcon}
                alt="star"
                /> */}
            
            
            <Vote score={movie.vote_average} count={movie.vote_count} />
       
            </StyledReview>
        </StyledMovieTile>
    );
}

export default MovieTile;