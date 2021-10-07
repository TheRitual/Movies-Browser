import { useSelector } from "react-redux";
import { selectDetailItem } from "../../moviesBrowserSlice";
import { 
    Wrapper,
    WrapperContent, 
    WrapperPoster, 
    Text,
    Star, 
    Note, 
    Scale, 
    Votes, 
    Title, 
 } from "./styled";
import star from "../../../../common/assets/svg/star.svg"

const MovieHeader = () => {
    const movie = useSelector(selectDetailItem);
    const rating = movie.vote_average;
    const votesNumber = movie.vote_count;
    const sectionStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`
};

    return (
        <Wrapper>
            <WrapperPoster
                alt={movie.backdrop_path}
                style={sectionStyle}>
                <WrapperContent>
                    <Text>
                    <Title> {movie.title} </Title>
                    <Star src={star}/>
                    <Note>{rating}</Note>
                    <Scale>/10</Scale>
                    <Votes>{votesNumber} votes</Votes>
                    </Text>
                </WrapperContent>
            </WrapperPoster>
        </Wrapper>
    );
};

export default MovieHeader;