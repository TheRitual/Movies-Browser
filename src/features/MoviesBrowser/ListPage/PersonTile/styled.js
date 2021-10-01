import styled from "styled-components";


export const StyledPersonTile = styled.div`
    background-color: ${({ theme }) => theme.colors.tileBackground};
    display: grid;
    grid-template-columns: 1fr;
    align-items: center; 
    padding: 16px;
    width: 100%;
`;