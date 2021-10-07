import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1920px;
    max-height: 770px;
    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    };
`;

export const WrapperPoster = styled.div`
    width: 1280px;
    height: 770px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

export const WrapperContent = styled.div`
    width: 1280px;
    height: 745px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background: linear-gradient(270deg, #000000, 
                rgba(0, 0, 0, 0.873268), 
                rgba(0, 0, 0, 0.720529), 
                rgba(0, 0, 0, 0.294577), 
                rgba(0, 0, 0, 0.159921), 
                rgba(0, 0, 0, 0) 25.68%), 
                linear-gradient(180deg, #000000, 
                rgba(0, 0, 0, 0.984059),
                rgba(0, 0, 0, 0.967732),
                rgba(0, 0, 0, 0.865569),
                rgba(0, 0, 0, 0.230315), 
                rgba(0, 0, 0, 0) 26.64%), 
                linear-gradient(90deg, #000000, 
                rgba(0, 0, 0, 0.689555),
                rgba(0, 0, 0, 0.439033),
                rgba(0, 0, 0, 0.20628),
                rgba(0, 0, 0, 0) 24.22%), 
                linear-gradient(180deg, 
                rgba(0, 0, 0, 0) 58.48%, 
                rgba(0, 0, 0, 0.106473), 
                rgba(0, 0, 0, 0.235359), 
                rgba(0, 0, 0, 0.492821), 
                rgba(0, 0, 0, 0.740286), #000000 92%)
`;

export const Text = styled.article`
    margin: 0 0 56px 276px;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.navText};
`;

export const Star = styled.img`
   width: 38.12px;
   height: 40px;
`;

export const Note = styled.span`
     margin: 0 7px 16px 8px;
     font-weight: 500;
     font-size: 30px;
     line-height: 130%;
     color: ${({ theme }) => theme.colors.navText};
`;

export const Votes = styled.p`
    margin-top: 16px;
    font-size: 16px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.navText};
`;

export const Scale = styled.span`
     align-self: center;
     font-size: 16px;
     line-height: 120%;
     color: ${({ theme }) => theme.colors.navText};
 `;

