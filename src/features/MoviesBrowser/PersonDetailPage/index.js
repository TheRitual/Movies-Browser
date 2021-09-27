import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailedPersonData, selectDetailItem } from "../moviesBrowserSlice";

const ActorDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailedPersonData(id));
    });
    const person = useSelector(selectDetailItem);
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} /> 
        </>
    );
}

export default ActorDetailPage;