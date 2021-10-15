import { VoteWrapper, StarIcon, Score, RatingScale, Count, ListVoteWrapper } from "./styled";
import star from "../assets/svg/smallStarIcon.svg";

const Vote = ({ score, count }) => {
    return (
        <VoteWrapper>
            <StarIcon src={star} />
            <Score>{score}</Score>
            <RatingScale>/10</RatingScale>
            <Count> {count} votes</Count>
        </VoteWrapper>
    );
};

export const MovieListVote = ({ score, count }) => {
    return (
        <ListVoteWrapper>
            <StarIcon src={star} />
            <Score>{score}</Score>
            <Count> {count} votes</Count>
        </ListVoteWrapper>
    );
};

export default Vote;