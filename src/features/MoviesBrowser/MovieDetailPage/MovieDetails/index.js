import { useSelector } from "react-redux";
import { selectIsLoading } from "../../moviesBrowserSlice";
import MovieDetailsTile from "../MovieDetailsTile";
import MovieHeader from "../MovieHeader";
import PeopleList from "../PeopleList";
import Loading from "../../../../common/Loading";
import Main from "../../Main";

const MovieDetails = () => {
    const isLoading = useSelector(selectIsLoading);
    return isLoading ?
        <Main>
            <h1>Loading Movie Details...</h1>
            <Loading />
        </Main>
        :
        <>
            <MovieHeader />
            <Main>
                <MovieDetailsTile />
                <PeopleList />
            </Main>
        </>
        ;
}

export default MovieDetails;