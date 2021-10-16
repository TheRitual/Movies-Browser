import { useSelector } from "react-redux";
import { selectIsLoading } from "../../moviesBrowserSlice";
import PersonDetailsTile from "../PersonDetailsTile";
import Loading from "../../../../common/Loading";
import CreditsList from "../CreditsList";
import Main from "../../Main";

const PersonDetails = () => {
    const isLoading = useSelector(selectIsLoading);
    return isLoading ?
        <Main>
            <h1>Loading Person Details...</h1>
            <Loading />
        </Main>
        :
        <Main>
            <PersonDetailsTile />
            <CreditsList />
        </Main>
        ;
}

export default PersonDetails;