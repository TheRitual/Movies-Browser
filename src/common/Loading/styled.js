import styled from "styled-components";
import { ReactComponent as Loading } from "../assets/svg/loading.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 16px;
    background-color: transparent;
`;

export const Header = styled.h1`
    align-self: flex-start;
    font-size: 36px;
    line-height: 43px;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
`;

export const LoadingIcon = styled(Loading)`
    max-width: 91px;
    height: 91px;
`;