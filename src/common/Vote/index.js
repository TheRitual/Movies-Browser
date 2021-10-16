import { VoteWrapper, Icon, Score, Count, Range } from "./styled";
import star from "../../assets/images/star.svg";

export const Vote = ({ score, count, type }) => {
    return (
        <VoteWrapper type={type}>
            <Icon src={star} type={type} />
            <Score type={type}> {score} <Range type={type}>/10</Range> </Score>
            
            <Count type={type}> {count} votes</Count>
        </VoteWrapper>
    );
};

export default Vote;