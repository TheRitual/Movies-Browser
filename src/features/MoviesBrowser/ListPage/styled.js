import styled from "styled-components";

export const ListHeader = styled.h1`
    font-family: Poppins;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.headers};
`;

export const ListGrid = styled.div`
    display: grid;
    width: 100%;
    margin: 0;
    padding: 0;
    grid-template-columns: repeat(${({columns}) => columns || 4}, 1fr);
    gap: 24px;
    justify-items: stretch;
    align-items: stretch;
`;