import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailedMovieData } from "../moviesBrowserSlice";
import MovieDetailsTile from "./MovieDetailsTile";
import MovieHeader from "./MovieHeader";
import PeopleList from "./PeopleList";

const MovieDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailedMovieData(id));
    });
    return (
        <>
            <MovieHeader />
            <MovieDetailsTile />
            <PeopleList title="Cast" />
            <PeopleList title="Crew" />
        </>
    );
}

export default MovieDetailPage;