import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1920px;
    height: 770px;

    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    };
`;

export const WrapperPoster = styled.div`
    height: 770px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    
    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    };
`;

export const WrapperContent = styled.div`
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
                rgba(0, 0, 0, 0.740286), #000000 92%);

    @media ( max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    };
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

export const Star = styled.img`
   width: 38.12px;
   height: 40px;
   object-fit: cover;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 15px;
  };
`;

export const Note = styled.span`
     font-weight: 500;
     font-size: 30px;
     line-height: 130%;
     margin-left: 8px;
     margin-right: 8px;
     color: ${({ theme }) => theme.colors.navText};

     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-left: 4px;
        margin-right: 4px;
        font-size: 14px;
  };
`;

export const Votes = styled.p`
    margin-top: 16px;
    font-size: 16px;
    margin-bottom: 56px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.navText};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 10px;
    margin-top: 6px;
    margin-left: 5px;
  }
`;

export const Scale = styled.span`
     align-self: center;
     font-size: 16px;
     line-height: 120%;
     color: ${({ theme }) => theme.colors.navText};

     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 10px;
        margin-top: 6px;
        margin-left: 5px;
    };
`;
