import { useSelector } from "react-redux";
import { Wrapper, Header, LoadingIcon } from "./styled";
import loading from "./loading.svg";
import { selectIsLoading } from "../../features/moviesBrowser/moviesBrowserSlice";

const Loading = () => {
    const searchQuery = useSelector(selectIsLoading);
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