import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { toError } from "../../../core/config/routes";
import { fetchDetailedPersonData, selectIsError, setType } from "../moviesBrowserSlice";
import PersonDetails from "./PersonDetails";

const PersonDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  useEffect(() => {
    dispatch(setType("person"));
    dispatch(fetchDetailedPersonData(id));
    // eslint-disable-next-line
  }, []);
  const isError = useSelector(selectIsError);
  return isError ? <Redirect to={toError()} /> : <PersonDetails />;

}

export default PersonDetailPage;