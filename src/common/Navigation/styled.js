import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
width: 1920px;
height: 94px;
background-color: ${({ theme }) => theme.colors.navigationBar};
left: 0%;
right: 0%;
top: 0%;
display: flex;
justify-content: center;
padding: 10px;
`;

export const NavigationList = styled.ul`
list-style: none;
display: flex;
justify-content: center;
width: max-content;
margin: 0;
`;

export const StyledCameraIcon = styled.img`
width: 22px;
height: 23px;
border: 2.5px solid ${({ theme }) => theme.colors.white};
`;

export const StyledTitle = styled.h1`
color: ${({ theme }) => theme.colors.white};
position: absolute;
width: 168px;
height: 40px;
left: 52px;
top: calc(50% - 40px/2);
margin: 0;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 40px;
letter-spacing: -1.5px;
text-transform: capitalize;
`;

export const StyledInput = styled.input`
background-color: ${({ theme }) => theme.colors.white};
border-radius: 33px;
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
border: 1px solid ${({ theme }) => theme.colors.mystic};
`;

export const InputIcon = styled.img`
width: 20px;
height: 20px;

`;

export const StyledNavWrapper = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
flex-wrap: wrap;
`;


export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: "active",
}))`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    `;