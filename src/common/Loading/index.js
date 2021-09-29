import { useSelector } from "react-redux";
import { Wrapper, Header, LoadingIcon } from "./styled";
import loading from "./loading.svg";
import { searchQueryParam } from "../../features/moviesBrowser/moviesBrowserSlice";

const Loading = () => {
    const searchQuery = useSelector(searchQueryParam);
    const headerText = searchQuery
        ? `Search results for "${searchQuery}"`
        : "";

    return (
        <Wrapper>
            <Header>{headerText}</Header>
            <LoadingIcon src={loading} />
        </Wrapper>
    );
};

export default Loading;