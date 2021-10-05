import { Link } from "react-router-dom";
import { toPerson } from "../../../../core/config/routes";
import { StyledPersonTile } from "./styled";

const PersonTile = ({ person, showJob, showCharacter }) => {
    return (
        <StyledPersonTile>
            <img alt={person.name} src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} />
            <Link to={toPerson(person)}>{person.name}</Link>
            {showJob || <p> {person.job} </p>}
            {showCharacter || <p> {person.character} </p>}
        </StyledPersonTile>
    );
}

export default PersonTile;