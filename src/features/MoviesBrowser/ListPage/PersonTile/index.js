
import { toPerson } from "../../../../core/config/routes";
import { StyledPersonTile, StyledLink, StyledPoster, PersonDetails } from "./styled";
import PersonDummy from "../../../../assets/images/person_dummy.svg";


const PersonTile = ({ person, showJob, showCharacter }) => {
    const imgSrc = person.profile_path ? `https://image.tmdb.org/t/p/w400${person.profile_path}` : PersonDummy;

    return (
        <StyledPersonTile>
            <StyledLink
            to={toPerson(person)}>
            <StyledPoster
                alt={person.name}
                src={imgSrc}
                />
                {person.name}
            </StyledLink>
            <PersonDetails>
                {showJob || person.job}
                {showCharacter || person.character }
            </PersonDetails>
        </StyledPersonTile>
    );
}

export default PersonTile;