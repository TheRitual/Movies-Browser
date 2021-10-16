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
} from "./styled";

const PersonDetailsTile = () => {
    const person = useSelector(selectDetailItem);
    const imageSrc = person.profile_path ? `https://image.tmdb.org/t/p/w400${person.profile_path}` : DummyPerson;
    return (
        <PersonDetailTile>
            <StyledPoster
                src={imageSrc}
                alt={person.name} />
            <div>
                <PersonName>
                    {person.name}
                </PersonName>
                {person.birthday &&
                    <Subtitle>
                        Birthday:
                        <StyledDetails>{person.birthday}</StyledDetails>
                    </Subtitle>
                }
                {person.place_of_birth &&
                    <Subtitle>
                        Place of birth:
                        <StyledDetails>{person.place_of_birth}</StyledDetails>
                    </Subtitle>
                }
                {person.biography &&
                    <Description>
                        {person.biography}
                    </Description>
                }
            </div>
        </PersonDetailTile>
    );
}

export default PersonDetailsTile;