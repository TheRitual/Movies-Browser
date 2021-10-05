
import { toPerson } from "../../../../core/config/routes";
import { StyledPersonTile, StyledLink, StyledPoster, PersonDetails } from "./styled";

const PersonTile = ({ person, showJob, showCharacter }) => {

    return (
        <StyledPersonTile>
            <StyledLink
                alt={person.name}
                src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                to={toPerson(person)}>{person.name}
            </StyledLink>

            <PersonDetails>
                {showJob || { personJob }}
                {showCharacter || { personCharacter }}
            </PersonDetails>

        </StyledPersonTile>
    );
}

export default PersonTile;