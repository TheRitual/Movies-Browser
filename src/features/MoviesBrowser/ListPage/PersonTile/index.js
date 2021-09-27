import { Link } from "react-router-dom";

const PersonTile = ({person}) => {
    return (
        <div>
            <Link to={person}>{person.name}</Link>
        </div>
    );
}

export default PersonTile;