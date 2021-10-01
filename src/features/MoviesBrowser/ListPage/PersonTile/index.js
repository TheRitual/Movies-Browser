import { Link } from "react-router-dom";
import { toPerson } from "../../../../core/config/routes";
import { StyledPersonTile } from "./styled";

const PersonTile = ({ person }) => {
    return (
        <StyledPersonTile>
            <div>
            <img alt={person.name} src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} />
            <Link to={toPerson(person)}>{person.name}</Link>
        </div>
        </StyledPersonTile>
    );
}

export default PersonTile;