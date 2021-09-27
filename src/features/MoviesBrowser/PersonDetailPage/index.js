import PersonDetailsTile from "./PersonDetailsTile";
import MoviesList from "./MoviesList";

const PersonDetailPage = () => {
    return (
        <>
          <PersonDetailsTile />  
          <MoviesList title="Movies - cast" />
          <MoviesList title="Movies - crew" />
        </>
    );
}

export default PersonDetailPage;