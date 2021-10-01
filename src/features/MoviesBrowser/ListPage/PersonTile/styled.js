import styled from "styled-components";


export const StyledPersonTile = styled.div`
    background: ${({ theme }) => theme.colors.tileBackground});
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding: 16px;
    width: 208px;
    height: 339px;

`;