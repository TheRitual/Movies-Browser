import styled from "styled-components";

export const StyledNavigation = styled.nav`
    width: 100%;
    height: 94px;
    background-color: ${({ theme }) => theme.colors.navBackground};
    color: ${({ theme }) => theme.colors.navText};
    padding: 23px;
`;