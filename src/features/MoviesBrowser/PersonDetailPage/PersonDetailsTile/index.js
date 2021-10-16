import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";
import DummyPerson from "../../../../assets/images/person_dummy.svg";
import {
    PersonDetailTile,
    PersonName,
    Subtitle,
    StyledDetails,
    Description,
    StyledPoster,
    DataWrapper,
    DetailsWrapper,
} from "./styled";

const PersonDetailsTile = () => {
    const person = useSelector(selectDetailItem);
    const imageSrc = person.profile_path ? `https://image.tmdb.org/t/p/w400${person.profile_path}` : DummyPerson;
    return (
        <PersonDetailTile>
            <StyledPoster src={imageSrc} alt={person.name} />
            <DataWrapper>
                <PersonName> {person.name} </PersonName>
                <DetailsWrapper>
                    {person.birthday &&
                        <Subtitle>
                            Date of birth:&nbsp;
                            <StyledDetails>
                                {person.birthday.toString().substring(8, 10)}.{person.birthday.toString().substring(5, 7)}.{person.birthday.toString().substring(0, 4)}
                            </StyledDetails>
                        </Subtitle>
                    }
                    {person.place_of_birth &&
                        <Subtitle>
                            Place of birth:&nbsp;<StyledDetails> {person.place_of_birth} </StyledDetails>
                        </Subtitle>
                    }
                </DetailsWrapper>
                {person.biography &&
                    <Description> {person.biography} </Description>
                }
            </DataWrapper>
        </PersonDetailTile>
    );
}

export default PersonDetailsTile;