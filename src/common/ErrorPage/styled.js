import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 50px 50px 120px;
    text-align: center;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.noResultPageBackground};
`;

export const ErrorImage = styled.img`
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    text-align: center;
    color: ${({ theme }) => theme.colors.headers};
`;

export const Subtitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme.colors.headers};
`;

export const ErrorButton = styled.button`
    display: inline-block;
    font-weight: bold;
    margin-top: 24px;
    padding: 16px 24px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.errorButton};
    color: ${({ theme }) => theme.colors.bodyBackground};
`;