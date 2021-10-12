import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";
import {
    PersonDetailTile,
    Content,
    PersonName,
    Subtitle,
    StyledDetails,
    Description,
    StyledPoster,
} from "./styled";

const PersonDetailsTile = () => {
    const person = useSelector(selectDetailItem);
    return (

        <PersonDetailTile>
            <StyledPoster
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name} />
            <Content>
                <PersonName>
                    {person.name}
                </PersonName>
                <Subtitle>
                    Birthday:
                    <StyledDetails>{person.birthday}</StyledDetails>
                </Subtitle>

                <Subtitle>
                    Place of birth:
                    <StyledDetails>{person.place_of_birth}</StyledDetails>
                </Subtitle>

                <Description>
                    {person.biography}
                </Description>
            </Content>
        </PersonDetailTile>
    );
}

export default PersonDetailsTile;