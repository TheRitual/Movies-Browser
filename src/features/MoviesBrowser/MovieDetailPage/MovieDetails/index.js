import { useSelector } from "react-redux";
import { selectIsLoading } from "../../moviesBrowserSlice";
import MovieDetailsTile from "../MovieDetailsTile";
import MovieHeader from "../MovieHeader";
import PeopleList from "../PeopleList";
import LoadingPage from "../../../../common/LoadingPage";

const MovieDetails = () => {
    const isLoading = useSelector(selectIsLoading);
    return isLoading ?
        <>
            <h1>Loading Movie Details...</h1>
            <LoadingPage />
        </>
        :
        <>
            <MovieHeader />
            <MovieDetailsTile />
            <PeopleList title="Cast" />
            <PeopleList title="Crew" />
        </>
        ;
}

export default MovieDetails;