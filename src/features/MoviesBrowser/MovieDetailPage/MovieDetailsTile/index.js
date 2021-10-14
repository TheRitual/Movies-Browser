import { useSelector } from "react-redux";
import Vote from "../../../../common/Vote";
import { selectDetailItem } from "../../moviesBrowserSlice";
import {
    StyledMovieDetailTile,
    Title,
    Subtitle,
    Subtekst,
    StyledDetails,
    StyledPoster,
    Content,
    Description,
    Tags,
    Tag,
} from "./styled";

const MovieDetailsTile = () => {
    const movie = useSelector(selectDetailItem);
    return (

        <StyledMovieDetailTile>

            <StyledPoster
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title} />

            <Content>
                <Title />
                <h1>{movie.title}</h1>
                <Subtitle />
                {/* subtitle */}

                <Subtekst>
                    Release data:&nbsp;
                    <StyledDetails>{movie.release_date}</StyledDetails>
                </Subtekst>

                <Subtekst>
                    Production:&nbsp;
                    <StyledDetails>{movie.production_countries && movie.production_countries.map(country => (
                        <span key={country.iso_3166_1}>
                            {country.name} ({country.iso_3166_1}),
                        </span>
                    ))}
                    </StyledDetails>
                </Subtekst>

                <Tags>
                    {movie.genres && movie.genres.map(genre => (
                        <Tag>
                            <span key={genre.id}>
                                {genre.name}
                            </span>
                        </Tag>
                    ))}
                </Tags>

                <Vote score={movie.vote_average} count={movie.vote_count} />

                <Description />
                {movie.overview}
            </Content>
        </StyledMovieDetailTile>
    );
}

export default MovieDetailsTile;