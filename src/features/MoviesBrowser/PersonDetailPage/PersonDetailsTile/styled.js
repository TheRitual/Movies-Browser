import styled from "styled-components";

export const PersonDetailTile = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    padding: 40px;
    display: flex;
    gap: 40px;
    flex-direction: row;
    align-items: flex-start;
    margin: 50px 0 64px;
`;

export const PersonName = styled.h1`
    color: ${({ theme }) => theme.colors.linkHeader};
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.3px;
    margin-bottom: 40px;
`;

export const Subtitle = styled.h3`
    color: ${({ theme }) => theme.colors.subText};
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

export const StyledDetails = styled.span`
    margin-left: 12px;
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    margin: 24px 0;
    cursor: pointer;
`;

export const StyledPoster = styled.img`
    order: 0;
    border-radius: 5px;
`;