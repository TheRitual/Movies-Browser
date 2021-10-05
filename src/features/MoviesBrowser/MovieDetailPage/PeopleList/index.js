import { useSelector } from "react-redux";
import { selectCast, selectCrew, selectIsCastEmpty, selectIsCrewEmpty } from "../../moviesBrowserSlice";
import PersonTile from "../../ListPage/PersonTile";
import { StyledPeopleList } from "./styled";

const PeopleList = () => {
    const crew = useSelector(selectCrew);
    const cast = useSelector(selectCast);
    const isCrewEmpty = useSelector(selectIsCrewEmpty);
    const isCastEmpty = useSelector(selectIsCastEmpty);

    return (
        <StyledPeopleList>
            {isCastEmpty ||
                <>
                    <h4>Cast</h4>
                    {cast.map(castItem => (
                        <PersonTile person={castItem} showCharacter={true} />
                    ))}
                </>
            }
            {isCrewEmpty ||
                <>
                    <h4>Crew</h4>
                    {crew.map(castItem => (
                        <PersonTile person={castItem} showJob={true} />
                    ))}
                </>
            }
        </StyledPeopleList>
    );
}

export default PeopleList;