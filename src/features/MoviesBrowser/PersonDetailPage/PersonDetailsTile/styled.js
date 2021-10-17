import styled from "styled-components";
import α from "color-alpha";

export const PersonDetailTile = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 24px;
    justify-items: stretch;
    align-items: start;
    grid-template-areas: "photo data" "photo description";
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    padding: 40px;
    box-shadow: 0px 4px 12px ${({ theme }) => α(theme.colors.tileShadow, 0.5)};
    border-radius: 5px;
    margin: 50px 0 64px;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-rows: auto auto;
        grid-template-areas: "photo data" "description description";
        padding: 16px;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
`;

export const ImageWrapper = styled.div`
    grid-area: photo;
    width: 100%;
`;

export const StyledPoster = styled.img`
    border-radius: 5px;
    width: 100%;
`;

export const PersonName = styled.h1`
    color: ${({ theme }) => theme.colors.linkHeader};
    font-weight: 600;
    font-size: 36px;
    line-height: 1.3px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 14px;
    }
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.subText};
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 12px;
    }
`;

export const StyledDetails = styled.span`
    grid-area: data;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.linkHeader};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 12px;
    }
`;

export const Description = styled.p`
    grid-area: description;
    margin: 0;
    font-size: 20px;
    line-height: 1.6;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 14px;
    }
`;

