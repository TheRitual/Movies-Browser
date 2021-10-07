import styled from "styled-components";

export const VoteWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto 1fr;
    justify-content: start;
    align-items: baseline;
    margin: 0;
`;

export const StarIcon = styled.img`
    width: 24px;
    margin-right: 8px;
`;

export const Score = styled.p`
    font-size: 22px;
    color: ${({ theme }) => theme.colors.linkHeader};
    font-weight: 500;
    margin: 0 8px 0 0;
`;

export const RatingScale = styled.p`
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const Count = styled.p`
    padding-left: 4px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.linkHeader};
    margin: 0 0 0 4px;
`;