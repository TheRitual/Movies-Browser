import styled, {css} from "styled-components";


export const StyledPersonTile = styled.div`
    background-color: ${({ theme }) => theme.colors.tileBackground};
    display: grid;
    grid-template-columns: 1fr;
    align-items: center; 
    padding: 16px;
    width: 100%;

    ${({ horizontal }) =>
    horizontal &&
    css`
    width: 1368px;
    height: 644px;
    flex-flow: column wrap;
    padding: 40px;
    justify-content: flex-start;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {

      }
`;