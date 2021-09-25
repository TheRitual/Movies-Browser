import styled from "styled-components";

export const Tile = styled.paragraph`
background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 40px;
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    margin-bottom: 24px;
`;

export const Subtitle = styled.div`
    font-size: 22px;
`;

export const Content = styled.div``;

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    margin: 16px -8px;
`;

export const Tag = styled.li`
    background: ${({theme}) => theme.color.mystic};
    padding: 8px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 24px 0px;
    line-height: 1.6;

`;