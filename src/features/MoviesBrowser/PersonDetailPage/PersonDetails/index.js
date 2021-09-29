import { useSelector } from "react-redux";
import { selectIsLoading } from "../../moviesBrowserSlice";
import PersonDetailsTile from "../PersonDetailsTile";
import MoviesList from "../MoviesList";
import LoadingPage from "../../../../common/LoadingPage";

const PersonDetails = () => {
    const isLoading = useSelector(selectIsLoading);
    return isLoading ?
        <>
            <h1>Loading Person Details...</h1>
            <LoadingPage />
        </>
        :
        <>
            <PersonDetailsTile />
            <MoviesList title="Movies - cast" />
            <MoviesList title="Movies - crew" />
        </>
        ;
}

export default PersonDetails;