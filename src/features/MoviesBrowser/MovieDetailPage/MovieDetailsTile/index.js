import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";

const MovieDetailsTile = () => {
    const movie = useSelector(selectDetailItem);
    return (
        <div>
            <h4>Movie Details Tile</h4>
            
            <p>Title: {movie.title}</p>
            
            <p> Votes Score = {movie.vote_average} </p>
            
            <p> Votes count = {movie.vote_count} </p>
            
            <p>Poster image : https://image.tmdb.org/t/p/w400{movie.poster_path}</p>
            
            <p> Release data: {movie.release_date} </p>
            
            <p> Countries:&nbsp;
                {movie.production_countries && movie.production_countries.map(country => (
                    <span>
                        {country.name} ({country.iso_3166_1}),
                    </span>
                ))}
            </p>

            <p> Genres:&nbsp;
                {movie.genres && movie.genres.map(genre => (
                    <span>
                        [{genre.name}] 
                    </span>
                ))}
            </p>

            <p>Overview: {movie.overview}</p>
        </div>
    );
}

export default MovieDetailsTile;