import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";

const PeopleList = ({title}) => {
    const movie = useSelector(selectDetailItem);
    return (
        <div>
            <h4>PeopleComponent with title {title} for movie {movie.title}</h4>
        </div>
    );
}

export default PeopleList;