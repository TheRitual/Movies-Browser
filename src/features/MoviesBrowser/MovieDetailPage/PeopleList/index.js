import { useSelector } from "react-redux";
import { selectCast, selectCrew, selectIsCastEmpty, selectIsCrewEmpty } from "../../moviesBrowserSlice";
import PersonTile from "../../ListPage/PersonTile";
import { SectionTitle, StyledPeopleList } from "./styled";

const PeopleList = () => {
    const crew = useSelector(selectCrew);
    const cast = useSelector(selectCast);
    const isCrewEmpty = useSelector(selectIsCrewEmpty);
    const isCastEmpty = useSelector(selectIsCastEmpty);

    return (<>
        {isCastEmpty || <>
            <SectionTitle>Cast</SectionTitle>
            <StyledPeopleList>
                {cast.map(castItem => (
                    <PersonTile person={castItem} showCharacter={true} />
                ))}
            </StyledPeopleList>
        </>}
        {isCrewEmpty || <>
            <SectionTitle>Crew</SectionTitle>
            <StyledPeopleList>
                {crew.map(crewItem => (
                    <PersonTile person={crewItem} showJob={true} />
                ))}
            </StyledPeopleList>
        </>}
    </>);
}


export default PeopleList;