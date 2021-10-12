import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMovieTile = styled.div`
    background: ${({ theme }) => theme.colors.tileBackground};
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    grid-gap: 40px;
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

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 16px -8px;
`;

export const Tag = styled.li`
    background: ${({theme}) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
    text-align: center;
    width: fit-content;
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