import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDetailedPersonData } from "../moviesBrowserSlice";
import PersonDetails from "./PersonDetails";

const PersonDetailPage = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDetailedPersonData());
    });
    return <PersonDetails />
}

export default PersonDetailPage;