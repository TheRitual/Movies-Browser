import styled from "styled-components";
import { Link } from "react-router-dom";
import {ReactComponent as ErrorIcon} from "../../assets/images/error.svg";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.noResultPageBackground};
    margin: 0 auto;
    text-align: center;
    padding: 10vmax;
`;

export const ErrorImage = styled(ErrorIcon)`
    width: 100px;
    height: 90px;
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

export const StyledLink = styled(Link)`
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