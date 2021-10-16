import styled from "styled-components";

export const VoteWrapper = styled.div`
    display: grid;
    grid-template-areas: ${({ type }) => {
        if (type === "header") {
            return `"icon score" "count count"`;
        }
        if (type === "details") {
            return `"icon score range count"`;
        }
        return `"icon score count"`;
    }};
    flex-wrap: nowrap;
    column-gap: 12px;
    row-gap: 17px;
    justify-content: flex-start;
    align-items: ${({ type }) => type === "details" ? "baseline" : "center"};
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        column-gap: 8px;
        row-gap: 17px;
    }
`;

export const Icon = styled.img`
    grid-area: icon;
    height: ${({ type }) => type === "header" ? "40px" : "24px"};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: ${({ type }) => type === "header" ? "40px" : "16px"};
    }
`;

export const Score = styled.span`
    grid-area: score;
    display: inline-block;
    font-size: ${({ type }) => {
        if(type === "header") {return "30px"}
        if(type === "details") {return "22px"}
        return "16px";
    }};
    color: ${({ theme, type }) => type === "header" ? theme.colors.voteHeaderScore : theme.colors.voteListScore};
    font-weight: 600;
    line-height: 1.5;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ type }) => {
        if(type === "header") {return "30px"}
        if(type === "details") {return "22px"}
        return "13px";
    }};
    }
`;

export const Range = styled.span`
    display: ${({ type }) => type === "header" || type === "details" ? "inline-block" : "none"};
    font-size: ${({ type }) => type === "header" ? "16px" : "14px"};
    color: ${({ theme, type }) => type === "header" ? theme.colors.voteHeaderScore : theme.colors.voteListScore};
    font-weight: normal;
    line-height: 1.2;
`;

export const Count = styled.span`
    grid-area: count;
    font-size: ${({ type }) => type === "details" ? "14px" : "16px"};
    white-space: nowrap;
    color: ${({ theme, type }) => {
            if (type === "header") { return theme.colors.voteHeaderScore }
            if (type === "details") { return theme.colors.voteListScore }
            return theme.colors.subtitleColor
        }};
    line-height: ${({ type }) => type === "header" ? "1.2" : "1.5"};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ type }) => type === "details" ? "14px" : "13px"};
        line-height: 130%;
        white-space: wrap;
    }
`;