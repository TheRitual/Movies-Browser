import { useSelector } from "react-redux";
import Vote from "../../../../common/Vote";
import { selectDetailItem } from "../../moviesBrowserSlice";
import DummyMovie from "../../../../assets/images/movie_dummy.svg";
import {
    StyledMovieDetailTile,
    Title,
    Subtitle,
    Subtext,
    StyledDetails,
    StyledPoster,
    Content,
    Description,
    Tags,
    Tag,
    DetailsWrapper,
} from "./styled";

const MovieDetailsTile = () => {
    const movie = useSelector(selectDetailItem);
    const imageSrc = movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : DummyMovie;
    return (
        <StyledMovieDetailTile>
            <StyledPoster src={imageSrc} alt={movie.title} />
            <Content>
                <Title>
                    {movie.title}
                </Title>
                {movie.release_date && <Subtitle>{movie.release_date.toString().substring(0, 4)} </Subtitle>}
                <DetailsWrapper>
                    {movie.release_date &&
                        <Subtext>
                            Release data:&nbsp;
                            <StyledDetails>
                                {movie.release_date.toString().substring(8, 10)}.{movie.release_date.toString().substring(5, 7)}.{movie.release_date.toString().substring(0, 4)}
                            </StyledDetails>
                        </Subtext>
                    }
                    {movie.production_countries &&
                        <Subtext>
                            Production:&nbsp;
                            <StyledDetails>{movie.production_countries && movie.production_countries.map(country => (
                                <span key={country.iso_3166_1}>
                                    {country.name} ({country.iso_3166_1}),
                                </span>
                            ))}
                            </StyledDetails>
                        </Subtext>}
                </DetailsWrapper>
                <Tags>
                    {movie.genres && movie.genres.map(genre => (
                        <Tag>
                            <span key={genre.id}>
                                {genre.name}
                            </span>
                        </Tag>
                    ))}
                </Tags>

                <Vote score={movie.vote_average} count={movie.vote_count} type="details" />

                <Description>
                    {movie.overview}
                </Description>
            </Content>
        </StyledMovieDetailTile>
    );
}

export default MovieDetailsTile;