import styled from "styled-components";

export const StyledDetailTile = styled.div`
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

export const Title = styled.h4`
    font-weight: 600;
    font-size: 36px;
    margin: 24px 0px;
    line-height: 43px;
    font-family: Poppins;
    font-style: normal;
    color: ${({ theme }) => theme.colors.titleHeader};

`;

export const Subtitle = styled.p`
    font-size: 22px;
    line-height: 26px;
    margin: 24px 0px;
`;


export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 16px -8px;
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.colors.tagBackground};
    list-style: none;
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 24px 0px;
    line-height: 32px;
    margin: 24px 0px;
`;

export const Content = styled.div``;

export const Poster = styled.img`
    border-radius: 5px;
    margin: 0px 40px;
`;

