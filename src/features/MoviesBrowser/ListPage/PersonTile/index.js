import { Link } from "react-router-dom";
import { toPerson } from "../../../../core/config/routes";

const PersonTile = ({ person }) => {
    return (
        <div>
            <img alt={person.name} src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} />
            <Link to={toPerson(person)}>{person.name}</Link>
        </div>
    );
}

export default PersonTile;