import styled from "styled-components";

export const StyledMovieDetailTile = styled.div`
    background: ${({ theme }) => theme.colors.tileBackground};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
    border-radius: 5px;
    max-width: 100%;
    
    
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0px;
    width: 100%;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const Title = styled.h1`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    margin: 24px 0px;
    line-height: 43px;
    font-family: Poppins;
    font-style: normal;
    color: ${({ theme }) => theme.colors.titleHeader};
`;

export const Subtitle = styled.h3`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;
    margin: 24px 0px;
`;

export const Subtekst = styled.h3`
    color: ${({ theme }) => theme.colors.subText};
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 8px;
    line-height: 22px;
`;

export const Tags = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding-left: 0;
    margin: 16px -8px;
`;

export const Tag = styled.li`
    background-color: ${({ theme }) => theme.colors.tagBackground};
    flex-direction: row;
    list-style: none;
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.linkHeader};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 160%;
    font-size: 20px;
    margin: 24px 0px;
    line-height: 32px;
    display: flex;
    align-items: center;
`;

export const Content = styled.div``;

export const StyledDetails = styled.span`
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const StyledPoster = styled.img`
    width: 312px;
    left: 40px;
    top: 40px;
    margin: 0px 40px;
    margin-bottom: 8px;
    border-radius: 5px;
`;

