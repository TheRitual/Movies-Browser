import { NoResultHeader, NoResultImage, Wrapper } from "./styled";

const NoResultsPage = () => {
    return (
        <Wrapper>
        <NoResultHeader>Sorry, there are  no results for "{}"</NoResultHeader>
        <NoResultImage/>
        </Wrapper>
    );
};

export default NoResultsPage;