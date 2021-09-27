import { Link } from "react-router-dom";
import { toPerson } from "../../../../core/config/routes";

const PersonTile = ({ person }) => {
    return (
        <div>
            <Link to={toPerson(person)}>{person.name}</Link>
        </div>
    );
}

export default PersonTile;