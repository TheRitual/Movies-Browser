import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { toError } from "../../../core/config/routes";
import { fetchDetailedMovieData, selectIsError, setType } from "../moviesBrowserSlice";
import MovieDetails from "./MovieDetails";


const MovieDetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    useEffect(() => {
        dispatch(setType("movie"));
        dispatch(fetchDetailedMovieData(id));
        // eslint-disable-next-line
    },[]);
    const isError = useSelector(selectIsError);
    return isError ? <Redirect to={toError()} /> : <MovieDetails />;
}

export default MovieDetailPage;