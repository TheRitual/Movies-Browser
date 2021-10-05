import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchDetailedPersonData, setType } from "../moviesBrowserSlice";
import PersonDetails from "./PersonDetails";

const PersonDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  useEffect(() => {
    dispatch(setType("person"));
    dispatch(fetchDetailedPersonData(id));
    // eslint-disable-next-line
  }, []);
  return <PersonDetails />
}

export default PersonDetailPage;