import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDetailedMovieData } from "../moviesBrowserSlice";
import MovieDetails from "./MovieDetails";


const MovieDetailPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailedMovieData());
    });
    return <MovieDetails />;
}

export default MovieDetailPage;