import styled, { css } from "styled-components";


export const StyledPersonTile = styled.div`
    background: ${({ theme }) => theme.colors.tileBackground});
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 16px;
    width: 208px;
    height: 339px;

    ${({ horizontal }) =>
        horizontal &&
        css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 40px;

    position: static;
    width: 1368px;
    height: 644px;
    left: 0px;
    top: 0px;
    `}

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0px;
        width: 100%;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;
        align-items: center;
      }``
`;