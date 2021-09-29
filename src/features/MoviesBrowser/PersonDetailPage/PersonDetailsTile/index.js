import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";

const PersonDetailsTile = () => {
    const person = useSelector(selectDetailItem);
    return (
        <div>
            <h4>Person Details Tile</h4>
            
            <p>Name: {person.name}</p>
            
            <p> Birthday:  {person.birthday} </p>
            
            <p> Place of birth:  {person.place_of_birth} </p>
            
            <p> Image : <img src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} /></p>
            
            <p>Bio: {person.biography}</p>
        </div>
    );
}

export default PersonDetailsTile;