import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailedMovieData } from "../moviesBrowserSlice";
import MovieDetails from "./MovieDetails";


const MovieDetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        dispatch(fetchDetailedMovieData(id));
        // eslint-disable-next-line
    },[]);
    return <MovieDetails />;
}

export default MovieDetailPage;