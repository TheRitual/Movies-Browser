import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.navBackground};
`;

export const WrapperPoster = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.container};
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('${({ image }) => image}');
    box-shadow: inset 0 0 3vw 3vw ${({ theme }) => theme.colors.navBackground};
`;

export const WrapperContent = styled.div`
    padding: 56px 0;
    width: auto;
    height: 770px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain; 
`;

export const Text = styled.article`
    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    };
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.navText};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 22px;
        margin-bottom: 4px;
    };
`;