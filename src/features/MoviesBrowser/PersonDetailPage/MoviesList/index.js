import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";

const MoviesList = ({title}) => {
    const person = useSelector(selectDetailItem);
    return (
        <div>
            <h4>MoviesComponent with title {title} for person {person.title}</h4>
        </div>
    );
}

export default MoviesList;