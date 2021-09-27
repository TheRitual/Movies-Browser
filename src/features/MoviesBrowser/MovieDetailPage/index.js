import MovieDetailsTile from "./MovieDetailsTile";
import MovieHeader from "./MovieHeader";
import PeopleList from "./PeopleList";

const MovieDetailPage = () => {
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