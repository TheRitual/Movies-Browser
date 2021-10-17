import styled from "styled-components";
import { ReactComponent as Loading } from "../../assets/images/loading.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
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
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    user-select: none;
    
    @keyframes rotate {
        from{
        transform: rotate(0deg);
        };
        to{
        transform: rotate(360deg);
        };
    };
    max-width: 91px;
    height: 91px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 35px;
        height: 35px;
    };
`;