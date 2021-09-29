import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: transparent;
`;

export const NoResultHeader = styled.h1`
    align-self: flex-start;
    margin: 50px 50px 120px;
    font-size: 36px;
    line-height: 43px;
    width: 674px;
    color: ${({ theme }) => theme.colors.headers};
`;

export const NoResultImage = styled.img`
    margin: 0 auto;
`;