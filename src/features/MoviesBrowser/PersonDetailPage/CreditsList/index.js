import { useSelector } from "react-redux";
import { selectCast, selectCrew, selectIsCastEmpty, selectIsCrewEmpty } from "../../moviesBrowserSlice";
import MovieTile from "../../ListPage/MovieTile";
import { StyledMoviesList } from "./styled";

const CreditsList = () => {
    const crew = useSelector(selectCrew);
    const cast = useSelector(selectCast);
    const isCrewEmpty = useSelector(selectIsCrewEmpty);
    const isCastEmpty = useSelector(selectIsCastEmpty);

    return (
        <StyledMoviesList>
            {isCastEmpty ||
                <>
                    <h4>Cast</h4>
                    {cast.map(castItem => <MovieTile movie={castItem}> </MovieTile>)}
                </>
            }
            {isCrewEmpty ||
                (<>
                    <h4>Crew</h4>
                    {crew.map(crewItem => <MovieTile movie={crewItem}> </MovieTile>)}
                </>)
            }
        </StyledMoviesList>
    );
}

export default CreditsList;