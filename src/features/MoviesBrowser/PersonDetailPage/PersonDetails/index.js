import { useSelector } from "react-redux";
import { selectIsLoading } from "../../moviesBrowserSlice";
import PersonDetailsTile from "../PersonDetailsTile";
import Loading from "../../../../common/Loading";
import CreditsList from "../CreditsList";

const PersonDetails = () => {
    const isLoading = useSelector(selectIsLoading);
    return isLoading ?
        <>
            <h1>Loading Person Details...</h1>
            <Loading />
        </>
        :
        <>
            <PersonDetailsTile />
            <CreditsList />
        </>
        ;
}

export default PersonDetails;