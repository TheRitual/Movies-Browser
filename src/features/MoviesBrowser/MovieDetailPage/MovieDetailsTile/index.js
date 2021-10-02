import { useSelector } from "react-redux";
import Vote from "../../../../common/Vote";
import { selectDetailItem } from "../../moviesBrowserSlice";
import {
    StyledDetailTile,
    Title,
    Subtitle,
    Subtekst,
    Content,
    Description,
    Tags,
    Tag,
} from "./styled";

const MovieDetailsTile = () => {
    const movie = useSelector(selectDetailItem);
    return (
        <StyledDetailTile>
             <p>Poster image : https://image.tmdb.org/t/p/w400{movie.poster_path}</p>
            <div><Content>
                <Title />
                <h4>Movie Details Tile</h4>
                <Subtitle />
                <p>Title: {movie.title}</p>

               
                
                <Subtekst>
                    <p> Release data: {movie.release_date} </p>
                    <p> Countries:&nbsp;
                        {movie.production_countries && movie.production_countries.map(country => (
                            <span key={country.iso_3166_1}>
                                {country.name} ({country.iso_3166_1}),
                            </span>
                        ))}
                    </p>
                </Subtekst>

                <Tags>
                    <p> Genres:&nbsp;
                        {movie.genres && movie.genres.map(genre => (
                            <Tag>
                                <span key={genre.id}>
                                    [{genre.name}]
                                </span>
                            </Tag>
                        ))}
                    </p>
                </Tags>

                <Vote score={movie.vote_average} count={movie.vote_count} />

                <Description />
                <p>Overview: {movie.overview}</p>
            </Content>

            </div>

        </StyledDetailTile>
    );
}

export default MovieDetailsTile;