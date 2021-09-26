import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailedMovieData, selectDetailItem } from "../moviesBrowserSlice";

const MovieDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailedMovieData(id));
    });
    const movie = useSelector(selectDetailItem);
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} />     
        </>
    );
}

export default MovieDetailPage;