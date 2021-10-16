import { useSelector } from "react-redux";
import { selectCast, selectCrew, selectIsCastEmpty, selectIsCrewEmpty } from "../../moviesBrowserSlice";
import MovieTile from "../../ListPage/MovieTile";
import { SectionTitle, StyledMoviesList } from "./styled";

const CreditsList = () => {
    const crew = useSelector(selectCrew);
    const cast = useSelector(selectCast);
    const isCrewEmpty = useSelector(selectIsCrewEmpty);
    const isCastEmpty = useSelector(selectIsCastEmpty);

    return (<>
        {isCastEmpty || <>
            <SectionTitle>Cast</SectionTitle>
            <StyledMoviesList>
                {Array.isArray(cast) && cast.map(castItem => (
                    <MovieTile movie={castItem} key={castItem.id} showCharacter={true} />
                ))}
            </StyledMoviesList>
        </>}
        {isCrewEmpty || <>
            <SectionTitle>Crew</SectionTitle>
            <StyledMoviesList>
                {Array.isArray(crew) && crew.map(crewItem => (
                    <MovieTile movie={crewItem} key={crewItem.id} showJob={true} />
                ))}
            </StyledMoviesList>
        </>}
    </>);
}

export default CreditsList;