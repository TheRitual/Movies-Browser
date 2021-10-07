import { VoteWrapper, StarIcon, Score, RatingScale, Count } from "./styled";
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

export default Vote;