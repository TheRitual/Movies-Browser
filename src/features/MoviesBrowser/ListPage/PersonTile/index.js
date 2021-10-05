
import { toPerson } from "../../../../core/config/routes";
import { StyledPersonTile, StyledLink, StyledPoster } from "./styled";

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
        </StyledPersonTile>
    );
}

export default PersonTile;