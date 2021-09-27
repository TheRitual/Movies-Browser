import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailedPersonData } from "../moviesBrowserSlice";
import PersonDetailsTile from "./PersonDetailsTile";
import MoviesList from "./MoviesList";

const PersonDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailedPersonData(id));
    });
    return (
        <>
          <PersonDetailsTile />  
          <MoviesList title="Movies - cast" />
          <MoviesList title="Movies - crew" />
        </>
    );
}

export default PersonDetailPage;