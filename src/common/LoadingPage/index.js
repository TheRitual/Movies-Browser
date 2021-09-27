import { Wrapper, Header, LoadingIcon } from "./styled";
import loading from "./loading.svg";

const LoadingPage = () => {
    return (
        <Wrapper>
            <Header>Search result for ""</Header>
            <LoadingIcon src={loading} />
        </Wrapper>
    );
};

export default LoadingPage;