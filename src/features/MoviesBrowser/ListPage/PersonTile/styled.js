import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledPersonTile = styled.div`
    background-color: ${({ theme }) => theme.colors.tileBackground};
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 16px;
    width: 100%;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

      }
`;

export const StyledLink = styled(Link)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.linkHeader};
    text-decoration: none;
    margin: 8px 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const StyledPoster = styled.img`
    border-radius: 5px;
`;