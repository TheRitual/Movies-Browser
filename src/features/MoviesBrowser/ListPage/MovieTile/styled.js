import styled from "styled-components";
import { Link } from "react-router-dom";
import α from "color-alpha";

export const StyledLink = styled(Link)`
    font-style: normal;
    text-decoration: none;
    margin: 0;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const StyledMovieTile = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    background: ${({ theme }) => theme.colors.tileBackground};
    padding: 16px;
    box-shadow: 0px 4px 12px ${({ theme }) => α(theme.colors.tileShadow, 0.5)};
    border-radius: 5px;
    gap: 8px; 
    height: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        align-items: flex-start;
        flex-direction: row;
        height: initial;
    }
`;

export const StyledPoster = styled.img`
    border-radius: 5px;
    width: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 50%;
    }
`;

export const DataWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    gap: 8px;
    justify-content: space-between;
    height: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        align-items: flex-start;
        width: 50%;
        height: initial;
    }
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 22px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-weight: 500;
        font-size: 16px;
        line-height: 1.3;
    }
`;

export const ExtraData = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.subtitleColor};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-weight: normal;
        font-size: 13px;
        line-height: 1.3;
    }
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
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 10px;
        line-height: 1.1;
        padding: 4px 8px;
    }
`;