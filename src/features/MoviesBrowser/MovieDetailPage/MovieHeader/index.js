import { useSelector } from "react-redux";

import { selectDetailItem } from "../../moviesBrowserSlice";
import { 
    Wrapper,
    WrapperContent, 
    WrapperPoster, 
    Star, 
    Note, 
    Scale, 
    Votes, 
    Title,
    Header, 
 } from "./styled";
import star from "./Star.svg";

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
                  
                        <Header>
                    <Title> {movie.title} </Title>
                    <Star src={star}/>
                    <Note>{rating}</Note>
                    <Scale>/10</Scale>
                    <Votes>{votesNumber} votes</Votes>
                    </Header>
                  
                </WrapperContent>
            </WrapperPoster>
        </Wrapper>
    );
};

export default MovieHeader;