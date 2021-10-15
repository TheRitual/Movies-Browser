import styled from "styled-components";
import { ReactComponent as Image } from "../assets/svg/NoResult.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    background-color: transparent;
`;

export const NoResultHeader = styled.h1`
    align-self: flex-start;
    margin: 56px 56px 40px;
    font-size: 36px;
    line-height: 43px;
    color: ${({ theme }) => theme.colors.headers};

    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0;
    };
`;

export const NoResultImage = styled(Image)`
    margin: 0 auto;
    width: 400px;
    height: 300px;
    padding: 0 0 80px 0;

    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 0;
    };
`;