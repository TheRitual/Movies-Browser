
import { toPerson } from "../../../../core/config/routes";
import { StyledPersonTile, StyledLink, StyledPoster, PersonDetails } from "./styled";

const PersonTile = ({ person, showJob, showCharacter }) => {

    return (
        <StyledPersonTile>
            <StyledLink
            to={toPerson(person)}>

            <StyledPoster
                alt={person.name}
                src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                />
                
            </StyledLink>

            <PersonDetails>
                {showJob || person.job}
                {showCharacter || person.character }
            </PersonDetails>

        </StyledPersonTile>
    );
}

export default PersonTile;