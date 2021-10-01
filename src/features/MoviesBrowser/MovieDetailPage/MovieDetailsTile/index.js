import { useSelector } from "react-redux";
import Vote from "../../../../common/Vote";
import { selectDetailItem } from "../../moviesBrowserSlice";
import { StyledDetailTile, Title, Content, Description, Tags } from "./styled";

const MovieDetailsTile = () => {
    const movie = useSelector(selectDetailItem);
    return (
        <StyledDetailTile>
            <div><Content>
                <Title />
                <h4>Movie Details Tile</h4>

                <p>Title: {movie.title}</p>

                <Vote score={movie.vote_average} count={movie.vote_count} />

                <p>Poster image : https://image.tmdb.org/t/p/w400{movie.poster_path}</p>

                <p> Release data: {movie.release_date} </p>

                <p> Countries:&nbsp;
                    {movie.production_countries && movie.production_countries.map(country => (
                        <span key={country.iso_3166_1}>
                            {country.name} ({country.iso_3166_1}),
                        </span>
                    ))}
                </p>
                <Tags />
                <p> Genres:&nbsp;
                    {movie.genres && movie.genres.map(genre => (
                        <span key={genre.id}>
                            [{genre.name}]
                        </span>
                    ))}
                </p>
                <Description />
                <p>Overview: {movie.overview}</p>
            </Content>

            </div>

        </StyledDetailTile>
    );
}

export default MovieDetailsTile;