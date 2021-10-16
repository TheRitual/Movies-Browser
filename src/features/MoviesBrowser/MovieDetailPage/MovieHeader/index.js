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
    const sectionStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`
    };

    return (
        <Wrapper>
            <WrapperPoster
                alt={movie.title}
                style={sectionStyle}>
                <WrapperContent>
                    <Text>
                        <Title> {movie.title} </Title>
                        <Vote count={movie.vote_count} score={movie.vote_average} type="header"/>
                    </Text>
                </WrapperContent>
            </WrapperPoster>
        </Wrapper>
    );
};

export default MovieHeader;