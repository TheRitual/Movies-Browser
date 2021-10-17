import { useSelector } from "react-redux";
import Vote from "../../../../common/Vote";
import { selectDetailItem } from "../../moviesBrowserSlice";
import BlankField from "../../../../assets/images/blank.svg";
import {
    Wrapper,
    WrapperContent,
    WrapperPoster,
    Title,
} from "./styled";

const MovieHeader = () => {
    const movie = useSelector(selectDetailItem);
    const imgUrl = movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : BlankField;

    return (
        <Wrapper>
            <WrapperPoster image={imgUrl}>
                <WrapperContent>
                        <Title> {movie.title} </Title>
                        <Vote count={movie.vote_count} score={movie.vote_average} type="header" />
                </WrapperContent>
            </WrapperPoster>
        </Wrapper>
    );
};

export default MovieHeader;