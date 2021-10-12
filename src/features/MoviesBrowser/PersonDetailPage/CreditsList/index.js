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
                {cast.map(castItem => (
                    <MovieTile movie={castItem} showCharacter={true}> </MovieTile>
                ))}
            </StyledMoviesList>
        </>}
        {isCrewEmpty || <>
            <SectionTitle>Crew</SectionTitle>
            <StyledMoviesList>
                {crew.map(crewItem => (
                    <MovieTile movie={crewItem} showJob={true}> </MovieTile>
                ))}
            </StyledMoviesList>
        </>}
    </>);
}




export default CreditsList;