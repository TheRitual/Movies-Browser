import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Search from "../assets/svg/SearchIcon.svg";


export const StyledNavigation = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.navBackground};
    justify-content: center;
    padding: 13px;
`;

export const NavigationList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0 10px;
    position: static;
    flex-grow: 8;
`;

export const NavigationListItem = styled.li`
    flex-grow: 0;
    justify-content: flex-start;
    margin: 15px 5px;
`;

export const StyledCameraIcon = styled.img`
    width: 37px;
    height: 47px;
    margin: 0 10px;
    padding-left: 5px;
`;

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.navText};
    width: 168px;
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    flex-grow: 1;
`;

export const StyledInput = styled.input`
    background: ${({ theme }) => theme.colors.white}; 
    font-size: 16px;
    border-radius: 33px;
    outline: none;
    height: 48px;
    min-width: 400px;
    outline: 0px;
    padding: 12px 12px 12px 64px;
    border: 1px solid ${({ theme }) => theme.colors.mystic}; 
    background-image: url(${Search});
    background-position: 26px 12px;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    color: #7E839A;
`;

export const StyledNavWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1368px;
    margin: auto;
`;


export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.navText};
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    padding: 12px 16px;
    border: 1px solid ${({ theme }) => theme.colors.navBackground};
    border-radius: 24px;
    height: 48px;
    &.active {
        border-color: ${({ theme }) => theme.colors.navText};
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.navText};
        color: ${({ theme }) => theme.colors.navBackground};
    }
`;