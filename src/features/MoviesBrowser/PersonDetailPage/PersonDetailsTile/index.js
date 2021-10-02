import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";
import {
    PersonDetailTile,
    PersonName,
    Subtekst,

} from "./styled";

const PersonDetailsTile = () => {
    const person = useSelector(selectDetailItem);
    return (
        <div>
            <PersonDetailTile>
                <p> Image : <img src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} /></p>
                <h4>Person Details Tile</h4>
                <PersonName />
                <p>Name: {person.name}</p>
                <Subtekst>

                    <p> Birthday:  {person.birthday} </p>

                    <p> Place of birth:  {person.place_of_birth} </p>
                </Subtekst>


                <Description>
                    <p>Bio: {person.biography}</p>
                </Description>



            </PersonDetailTile>

        </div>
    );
}

export default PersonDetailsTile;