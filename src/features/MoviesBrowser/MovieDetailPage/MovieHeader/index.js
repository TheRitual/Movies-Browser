import { useSelector } from "react-redux";
import { LargeVote } from "../../../../common/Vote";
import { selectDetailItem } from "../../moviesBrowserSlice";

const MovieHeader = () => {
    const movie = useSelector(selectDetailItem);
    return (
        <div>
            <h4>Movie Header Component</h4>
            <p> Title = {movie.title} </p>
            <LargeVote score={movie.vote_average} count={movie.vote_count} />
            <p>Backdrop image : https://image.tmdb.org/t/p/w1280{movie.backdrop_path}</p>
        </div>
    );
}

export default MovieHeader;