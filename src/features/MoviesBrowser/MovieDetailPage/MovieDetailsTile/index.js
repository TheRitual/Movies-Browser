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
    Description,
    Tags,
    Tag,
    DetailsWrapper,
    ImageWrapper,
    DataWrapper,
    Info,
    MobileInfo,
} from "./styled";

const MovieDetailsTile = () => {
    const movie = useSelector(selectDetailItem);
    const imageSrc = movie.poster_path ? `https://image.tmdb.org/t/p/w400${movie.poster_path}` : DummyMovie;
    return (
        <StyledMovieDetailTile>
            <ImageWrapper>
                <StyledPoster src={imageSrc} alt={movie.title} />
            </ImageWrapper>
            <DetailsWrapper>
                <Title> {movie.title} </Title>
                {movie.release_date && <Subtitle>{movie.release_date.toString().substring(0, 4)} </Subtitle>}
                <DataWrapper>
                    {movie.production_countries &&
                        <Subtext>
                            <Info>Production: &nbsp;</Info>
                            <StyledDetails>{movie.production_countries && movie.production_countries.map((country, index) => (
                                <span key={index}>
                                    <Info>{country.name}</Info>
                                    <MobileInfo>{country.iso_3166_1}</MobileInfo>,&nbsp;
                                </span>
                            ))}
                            </StyledDetails>
                        </Subtext>}
                    {movie.release_date &&
                        <Subtext>
                            <Info>Release date:&nbsp;</Info>
                            <StyledDetails>
                                {movie.release_date.toString().substring(8, 10)}.{movie.release_date.toString().substring(5, 7)}.{movie.release_date.toString().substring(0, 4)}
                            </StyledDetails>
                        </Subtext>}
                </DataWrapper>

                <Tags>
                    {movie.genres && movie.genres.map((genre, index) => (
                        <Tag>
                            <span key={index}>
                                {genre.name}
                            </span>
                        </Tag>
                    ))}
                </Tags>
                <Vote score={movie.vote_average} count={movie.vote_count} type="details" />
            </DetailsWrapper>
            <Description>
                {movie.overview}
            </Description>
        </StyledMovieDetailTile>
    );
}

export default MovieDetailsTile;