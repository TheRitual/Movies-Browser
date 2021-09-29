import { useSelector } from "react-redux";
import { selectIsLoading } from "../../moviesBrowserSlice";
import PersonDetailsTile from "../PersonDetailsTile";
import MoviesList from "../MoviesList";
import Loading from "../../../../common/Loading";

const PersonDetails = () => {
    const isLoading = useSelector(selectIsLoading);
    return isLoading ?
        <>
            <h1>Loading Person Details...</h1>
            <Loading />
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