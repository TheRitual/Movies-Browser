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
                {Array.isArray(cast) && cast.map((castItem, index) => (
                    <PersonTile person={castItem} key={index} showCharacter={true} />
                ))}
            </StyledPeopleList>
        </>}
        {isCrewEmpty || <>
            <SectionTitle>Crew</SectionTitle>
            <StyledPeopleList>
                {Array.isArray(crew) && crew.map((crewItem, index) => (
                    <PersonTile person={crewItem} key={index} showJob={true} />
                ))}
            </StyledPeopleList>
        </>}
    </>);
}


export default PeopleList; 