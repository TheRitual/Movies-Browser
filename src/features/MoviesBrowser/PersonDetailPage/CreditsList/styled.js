import styled from "styled-components";

export const StyledMoviesList = styled.div`
    display: grid;
    width: 100%;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    justify-items: center;
    align-items: stretch;
    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLandscape}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        grid-template-columns: 1fr;
    }  
`;

export const SectionTitle = styled.h4`
    color: ${({ theme }) => theme.colors.listTitles};
    margin: 64px auto 32px;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
`;