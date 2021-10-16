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
    background-size: cover;
    background-image: url('${({ image }) => image}');
    box-shadow: inset 0 0 2vw 2vw ${({ theme }) => theme.colors.navBackground};
    background-position: top;
`;

export const WrapperContent = styled.div`
    padding: 56px 0;
    width: auto;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    text-shadow:    0px 0px 15px ${({ theme }) => theme.colors.navBackground},
                    0px 0px 7px ${({ theme }) => theme.colors.navBackground};
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 600; 
    font-size: 64px;
    line-height: 1.2;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.navText};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 22px;
        margin-bottom: 4px;
    };
`;