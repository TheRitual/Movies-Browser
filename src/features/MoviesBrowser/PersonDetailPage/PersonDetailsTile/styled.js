import styled from "styled-components";

export const PeronDetailTile = styled.div`
    position: relative;
    width: 100%max-content;
    background-color: ${({ theme }) => theme.colors.tileBackground};
    justify-content: flex-start;
    padding: 40px;
`;

export const PersonName = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    /* or 43px */

    display: flex;
    align-items: center;
`;

export const subTekst = styled.h3`
    color: ${({ theme }) => theme.colors.subTekst};
    font-size: 18px;
    line-height: 120%;

`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 160%;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
`;