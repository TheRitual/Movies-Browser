import styled from "styled-components";
import α from "color-alpha";

export const PersonDetailTile = styled.div`
    display: grid;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    padding: 40px;
    box-shadow: 0px 4px 12px ${({ theme }) => α(theme.colors.tileShadow, 0.5)};
    grid-template-columns: 1fr 2fr;
    grid-gap: 40px;
    border-radius: 5px;
    flex-direction: row;
    margin: 50px 0 64px;
`;

export const StyledPoster = styled.img`
    border-radius: 5px;
`;

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 24px;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`;

export const PersonName = styled.h1`
    color: ${({ theme }) => theme.colors.linkHeader};
    font-weight: 600;
    font-size: 36px;
    line-height: 1.3px;
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.subText};
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
    padding: 0;
`;

export const StyledDetails = styled.span`
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const Description = styled.p`
    margin: 0;
    font-size: 20px;
    line-height: 1.6;
`;

