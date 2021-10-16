import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Search from "../../assets/images/SearchIcon.svg";


export const StyledNavigation = styled.nav`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.navBackground};
`;

export const StyledNavWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 2fr;
    grid-template-areas: "logo buttons . search";
    width: 100%;
    justify-content: space-between;
    max-width: ${({ theme }) => theme.breakpoints.container};
    margin: 0 auto;
    padding: 23px 16px;
    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 16px;
        grid-template-areas: "logo buttons" "search search";
        padding: 16px 18px;
    }
`;

export const LogoWrapper = styled.div`
    grid-area: logo;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0;
    gap: 17px;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 10px;
    }
`;

export const StyledCameraIcon = styled.img`
    height: 40px;
    margin: 4px;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        height: 20px;
    }
`;

export const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.navText};
    white-space: nowrap;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px; 
    letter-spacing: -1.5px;
    text-transform: capitalize;
    margin: 0;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size:13px;
        letter-spacing: -0.5px;
        margin-right: 14px;
    }
`;
 
export const ButtonsWrapper = styled.div`
    grid-area: buttons;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 0;
    gap: 20px;
    margin-left: 30px;
    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
        gap: initial;
        margin-left: 0;
        justify-content: flex-end;
    }
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
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        justify-content: space-between;
        height: fit-content;
        line-height: 18px;
        font-size: 12px;
        padding: 8px 12px;
    }
`;

export const SearchWrapper = styled.div`
    grid-area: search;
    align-items: center;
    margin: 0;
    padding: 0;
`;

export const StyledInput = styled.input`
    float: right;
    background: ${({ theme }) => theme.colors.white}; 
    font-size: 16px;
    border-radius: 33px;
    outline: none;
    height: 48px;
    width: 100%;
    outline: 0px;
    padding: 12px 12px 12px 64px;
    border: 1px solid ${({ theme }) => theme.colors.mystic}; 
    background-image: url(${Search});
    background-position: 26px 12px;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    color: ${({ theme }) => theme.colors.searchBarText};
    display: block;
    line-height: 1.5;
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 13px;
        line-height: 1.3;
        float: initial;
    }
`;
