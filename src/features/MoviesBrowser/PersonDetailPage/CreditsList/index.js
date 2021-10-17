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
            <SectionTitle>Movies - Cast ({cast.length})</SectionTitle>
            <StyledMoviesList>
                {Array.isArray(cast) && cast.map((castItem, index) => (
                    <MovieTile movie={castItem} key={index} showCharacter={true} />
                ))}
            </StyledMoviesList>
        </>}
        {isCrewEmpty || <>
            <SectionTitle>Movies - Crew ({crew.length})</SectionTitle>
            <StyledMoviesList>
                {Array.isArray(crew) && crew.map((crewItem, index) => (
                    <MovieTile movie={crewItem} key={index} showJob={true} />
                ))}
            </StyledMoviesList>
        </>}
    </>);
}

export default CreditsList;