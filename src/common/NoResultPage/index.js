import { NoResultHeader, NoResultImage, Wrapper } from "./styled";
import { searchQueryParamName } from "../../features/moviesBrowser/queryParamNames";
import { useQueryParameter } from "../api/useQueryParameters";

const NoResultsPage = () => {
    const search = useQueryParameter(searchQueryParamName);

    return (
        <Wrapper>
            <NoResultHeader>Sorry, there are  no results for “{search}”</NoResultHeader>
            <NoResultImage />
        </Wrapper>
    );
};

export default NoResultsPage;