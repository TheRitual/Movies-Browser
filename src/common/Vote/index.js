import { VoteWrapper, StarIcon, Score, RatingScale, Count} from "./styled";
import smallStar from "./smallStar.svg";

const Vote = ({ score, count }) => {
    return (
        <VoteWrapper>
            <StarIcon src={smallStar} />
            <Score>{score}</Score>
            <RatingScale>/10</RatingScale>
            <Count>{count} votes</Count>
        </VoteWrapper>
    );
}

export const LargeVote = ({score, count}) => {
    return (
        <>
            [StarImage] {score}/10  [{count} people voted]
        </>
    );
}

export default Vote;