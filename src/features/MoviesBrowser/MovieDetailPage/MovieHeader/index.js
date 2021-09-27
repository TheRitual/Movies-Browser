import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";

const MovieHeader = () => {
    const movie = useSelector(selectDetailItem);
    return (
        <div>
            <h4>Movie Header Component</h4>
            <p> Title = {movie.title} </p>
            <p> Votes Score = {movie.vote_average} </p>
            <p> Votes count = {movie.vote_count} </p>
            <p>Backdrop image : https://image.tmdb.org/t/p/w1280{movie.backdrop_path}</p>
        </div>
    );
}

export default MovieHeader;