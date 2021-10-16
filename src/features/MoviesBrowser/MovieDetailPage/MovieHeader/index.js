import { useSelector } from "react-redux";
import Vote from "../../../../common/Vote";
import { selectDetailItem } from "../../moviesBrowserSlice";
import {
    Wrapper,
    WrapperContent,
    WrapperPoster,
    Title,
    Text,
} from "./styled";

const MovieHeader = () => {
    const movie = useSelector(selectDetailItem);
    const imgUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

    return (
        <Wrapper>
            <WrapperPoster image={imgUrl}>
                <WrapperContent>
                    <Text>
                        <Title> {movie.title} </Title>
                        <Vote count={movie.vote_count} score={movie.vote_average} type="header" />
                    </Text>
                </WrapperContent>
            </WrapperPoster>
        </Wrapper>
    );
};

export default MovieHeader;