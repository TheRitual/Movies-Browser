import styled from "styled-components";
import α from "color-alpha";

export const PersonDetailTile = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    padding: 40px;
    box-shadow: 0px 4px 12px ${({ theme }) => α(theme.colors.tileShadow, 0.5)};
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 40px;
    border-radius: 5px;
    flex-direction: row;
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