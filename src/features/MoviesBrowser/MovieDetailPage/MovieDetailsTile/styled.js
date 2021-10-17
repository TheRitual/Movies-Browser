import styled from "styled-components";
import α from "color-alpha";

export const StyledMovieDetailTile = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
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
        grid-row-gap: 8px;
        margin: 16px 0 21px;
    }
`;

export const ImageWrapper = styled.div`
    grid-area: photo;
    width: 40vw;
`;

export const StyledPoster = styled.img`
    border-radius: 5px;
    width: 100%;
`;

export const DetailsWrapper = styled.div`
    grid-area: data;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    padding: 0;
    margin: 0;
`;

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.linkHeader};
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 0;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-weight: 500;
        font-size: 16px;
    }
`;

export const Subtitle = styled.p`
    font-size: 22px;
    line-height: 1.2;
    font-style: normal;
    font-weight: normal;
    margin: 0;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 16px;
        line-height: 1.3;
        color: ${({ theme }) => theme.colors.subText};
    }
`;

export const Subtext = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.subText};
`;

export const Info = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        display: none;
    }
`;

export const MobileInfo = styled.span`
    display: none;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        display: inline;
    }
`;

export const StyledDetails = styled.span`
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px 8px;
    flex-grow: 2;
`;

export const Tag = styled.span`
    background: ${({ theme }) => theme.colors.tagBackground};
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    text-align: center;
    width: fit-content;
    height: fit-content;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 10px;
        line-height: 1.1;
        padding: 4px 8px;
    }
`;

export const Description = styled.p`
    grid-area: description;
    color: ${({ theme }) => theme.colors.linkHeader};
    line-height: 1.6;
    font-size: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 14px;
    }
`;