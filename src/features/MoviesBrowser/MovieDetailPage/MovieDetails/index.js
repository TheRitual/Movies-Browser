import { useSelector } from "react-redux";
import { selectIsLoading } from "../../moviesBrowserSlice";
import MovieDetailsTile from "../MovieDetailsTile";
import MovieHeader from "../MovieHeader";
import PeopleList from "../PeopleList";
import Loading from "../../../../common/Loading";

const MovieDetails = () => {
    const isLoading = useSelector(selectIsLoading);
    return isLoading ?
        <>
            <h1>Loading Movie Details...</h1>
            <Loading />
        </>
        :
        <>
            <MovieHeader />
            <MovieDetailsTile />
            <PeopleList />
        </>
        ;
}

export default MovieDetails;