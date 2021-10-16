import styled from "styled-components";
import { Link } from "react-router-dom";
import α from "color-alpha";

export const StyledMovieTile = styled.div`
    display: grid;
    background: ${({ theme }) => theme.colors.tileBackground};
    padding: 16px;
    box-shadow: 0px 4px 12px ${({ theme }) => α(theme.colors.tileShadow, 0.5)};
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0px;
    width: 100%;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;


export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;
`;

export const Subtitle = styled.h3`
    font-size: 22px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.subtitleColor};
`;

export const Content = styled.div``;

export const ExtraData = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.subtitleColor};
`;

export const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0 40px;
    justify-content: flex-start;
    gap: 8px;
`;

export const Tag = styled.span`
    background: ${({ theme }) => theme.colors.tagBackground};
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    text-align: center;
    width: fit-content;
    height: fit-content;
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 24px 0px;
    line-height: 1.6;
`;

export const StyledLink = styled(Link)`
    font-family: Poppins;
    font-style: normal;
    text-decoration: none;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    margin: none;
    align-self: center;
    flex-grow: 0;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const StyledPoster = styled.img`
    width: 100%;
    margin-bottom: 8px;
    border-radius: 5px;
`;

export const StyledReview = styled.div`
    display: flex;
    align-items: flex-end;
    flex-grow: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
}
`;