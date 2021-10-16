import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
        -webkit-font-smoothing: inherit;
    }

    body {
        overflow-y: scroll;
        background-color: ${({ theme }) => theme.colors.bodyBackground};
        font-family: 'Poppins', sans-serif;
        background-repeat: repeat-x;
        background-position-y: 75px;
    }

    a {
        text-decoration: none;
    }
`;