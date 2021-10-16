import styled from "styled-components";
import { Link } from "react-router-dom";
import α from "color-alpha";

export const StyledPersonTile = styled.div`
    background-color: ${({ theme }) => theme.colors.tileBackground};
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 16px;
    width: 100%;
    box-shadow: 0px 4px 12px ${({ theme }) => α(theme.colors.tileShadow, 0.5)};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      align-items: center;
      width: 100%;
      padding: 8px;
    }
`;

export const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.linkHeader};
    text-decoration: none;
    text-align: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 20px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 18px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`;

export const StyledProfile = styled.img`
    border-radius: 5px;
    width: 100%;
`;

export const PersonDetails = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.personDetail};
    align-items: center;
    text-align: center;
    margin: 8px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 13px;
        line-height: 1.3;
    }
`;