
import { toPerson } from "../../../../core/config/routes";
import { StyledPersonTile, StyledLink, StyledPoster, PersonDetails } from "./styled";

const PersonTile = ({ person }) => {
    
    return (
        <StyledPersonTile>
            <StyledPoster
            people={person.name} 
            src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
            />
            <StyledLink
            to={toPerson(person)}>{person.name}
                        
            </StyledLink>

            <PersonDetails>
            {showJob || <p> {person.job} </p>}
            {showCharacter || <p> {person.character} </p>}
            </PersonDetails>
        </StyledPersonTile>
    );
}

export default PersonTile;