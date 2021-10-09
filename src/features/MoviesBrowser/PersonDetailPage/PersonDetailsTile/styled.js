import styled from "styled-components";

export const PersonDetailTile = styled.div`
    width: 1368px;
    height: 644px;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    padding: 40px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 50px 0 50px;
`;

export const PersonName = styled.h1`
    color: ${({ theme }) => theme.colors.linkHeader};
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.3px;
    text-align: center;
    margin: 24px 0px;
`;

export const Subtitle = styled.h3`
    color: ${({ theme }) => theme.colors.subTekst};
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    margin: 40px;
`;

export const StyledDetails = styled.span`
    margin-left: 12px;
    font-size: 18px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.linkHeader};
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.3;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    display: flex;
    text-align: justify;
    margin: 40px;

`;

export const Content = styled.div``;

export const StyledPoster = styled.img`
    flex: none;
    order: 0;
    flex-grow: 0;
    border-radius: 5px;
    width: 399px;
    height: 564px;
    left: 40px;
    top: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 200px;
  }
`;