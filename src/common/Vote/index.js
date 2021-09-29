const Vote = ({score, count}) => {
    return (
        <>
            [StarImage] {score} [{count} people voted]
        </>
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