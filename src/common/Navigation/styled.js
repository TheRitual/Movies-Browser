import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledNavigation = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.navBackground};
    justify-content: center;
    padding: 13px;
`;

export const NavigationList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    width: max-content;
    margin: 0;
`;

export const StyledCameraIcon = styled.img`
    width: 37px;
    height: 47px;
    margin: 0 10px;
    padding-left: 5px;
`;

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.navText};
    position: inherit;
    top: calc(50% - 40px/2);
    width: 168px;
    height: 40px;
    left: 52px;
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    flex-grow: 1;
`;

export const StyledLabel = styled.label`
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.mystic};
    border-radius: 33px;
    position: inherit;
    width: 30%max-content;
    height: 40px;
    display: flex;
    align-items: center;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
`;

export const StyledInput = styled.input`
    font-size: 16px;
    border-radius: 33px;
    outline: none;
    flex-grow: 0.8;
    width: 75%;
    border: 1px solid ${({ theme }) => theme.colors.mystic}; 
`;

export const InputIcon = styled.img`
    width: 20px;
    height: 23px;
    border: 1px solid ${({ theme }) => theme.colors.waterloo};
    background: url("../assets/images/SearchIcon.svg") no-repeat scroll 7px 7px;
    padding-left: 30px;
`;

export const StyledNavWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
`;


export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.navText};
    text-decoration: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    position: static;
    padding: 10px;

    &.active {
        border: 1px solid ${({ theme }) => theme.colors.navText};
        border-radius: 24px;
        box-sizing: border-box;
    }
`;