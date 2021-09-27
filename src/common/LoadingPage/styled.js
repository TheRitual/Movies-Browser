import styled from "styled-components";
import { ReactComponent as Loading } from "./loading.svg";

export const Wrapper = styled.div`
    margin: 50px 50px 120px;
    text-align: center;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.subpageBackground};
`;

export const Header = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
`;

export const LoadingIcon = styled(Loading)`
    max-width: 91px;
    height: 91px;
`;