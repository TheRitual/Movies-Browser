import styled from "styled-components";
import { ReactComponent as leftArrowSVG } from "../../../../common/assets/svg/leftArrow.svg";
import { ReactComponent as rightArrowSVG } from "../../../../common/assets/svg/rightArrow.svg";

export const LeftArrow = styled(leftArrowSVG)`
    width: 7px;
    height: 11px;
`;

export const RightArrow = styled(rightArrowSVG)`
    width: 7px;
    height: 11px;
`;

export const PaginatorButton = styled.button`
    height: 36px;
    font-size: 14px;
    padding: 8px 16px;
    margin: 12px;
    color: ${({ theme }) => theme.colors.paginatorButtonText};
    cursor: pointer;
    background: ${({ theme }) => theme.colors.paginatorButton};
    border-radius: 5px;
    border: none;
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
`;

export const PaginatorText = styled.span`
    color: ${({ theme }) => theme.colors.paginatorText};
    font-size: 16px;
    line-height: 1.5;
    margin-left: 24px;
    margin-right: 24px;
`;

export const PaginatorPage = styled.span`
    color: ${({ theme }) => theme.colors.paginatorPage};
    font-weight: 600;
`;

export const PaginatorWrapper = styled.div`
    margin: 40px  auto 103px;
    padding: 0px;
    width: fit-content;
`;