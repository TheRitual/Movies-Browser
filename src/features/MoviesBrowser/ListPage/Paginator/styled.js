import styled from "styled-components";
import { ReactComponent as leftArrowSVG } from "../../../../assets/images/leftArrow.svg";
import { ReactComponent as rightArrowSVG } from "../../../../assets/images/rightArrow.svg";

export const LeftArrow = styled(leftArrowSVG)`
    width: 7px;
    height: 11px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        height: 8px;
        width: 5px;
    }
`;

export const RightArrow = styled(rightArrowSVG)`
    width: 7px;
    height: 11px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        height: 8px;
        width: 5px;
    }
`;

export const AdditionalLeftArrow = styled(LeftArrow)`
    display: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        display: inline-block;
    }
`;

export const AdditionalRightArrow = styled(RightArrow)`
    display: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        display: inline-block;
    }
`;

export const PaginatorButton = styled.button`
    display: flex;
    flex-wrap: nowrap;
    height: 36px;
    font-size: 14px;
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.paginatorButtonText};
    cursor: pointer;
    background: ${({ theme }) => theme.colors.paginatorButton};
    border-radius: 5px;
    border: none;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:hover {
        filter: brightness(1.04);
    }

    & svg {
        color: ${({ theme }) => theme.colors.paginatorArrow};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors.paginatorDisabledButton};
        & svg {
            color: ${({ theme }) => theme.colors.paginatorDisabledArrow};
        }
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        height: 23px;
        padding: 8px 12px;
        font-size: 8px;
        gap: 4px;
    }
`;

export const PaginatorText = styled.span`
    color: ${({ theme }) => theme.colors.paginatorText};
    font-size: 16px;
    line-height: 1.5;
    margin: 0 12px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 0;
        font-size: 10px;
        line-height: 2.4;
    }
`;

export const PaginatorPage = styled.span`
    color: ${({ theme }) => theme.colors.paginatorPage};
    font-weight: 600;
`;

export const PaginatorWrapper = styled.div`
    margin: 40px auto;
    padding: 0;
    width: 100%;
    display: flex;
    gap: 12px;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        gap: 8px;
    }
`;

export const ButtonText = styled.span`
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLandscape}) {
        display: none;
    }
`;