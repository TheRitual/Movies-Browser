import styled from "styled-components";

export const ListHeader = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.headers};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        font-size: 18px;
    }
`;

export const ListGrid = styled.div`
    display: grid;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(${({ type }) => type === "person" ? 6 : 4}, 1fr);
    gap: 24px;
    justify-items: stretch;
    align-items: stretch;
    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
        grid-template-columns: repeat(${({ type }) => type === "person" ? 4 : 3}, 1fr);
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(${({ type }) => type === "person" ? 3 : 2}, 1fr);
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        grid-template-columns: repeat(${({ type }) => type === "person" ? 2 : 1}, 1fr);
    }
`;