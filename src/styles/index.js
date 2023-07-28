import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --brand-color-1: #27AE60;
        --brand-color-2: #FF6E5E;

        --gray-color-1: #F5F5F5;
        --gray-color-2: #D7D7D7;
        --gray-color-3: #AEAEAE;
        --gray-color-4: #777777;
        --gray-color-5: #333333;

        --negative-color: #E60000;
        --warning-color: #FFCD07;
        --success-color: #168821;
        --information-color: #155BCB;

        --white-color: #FFFFFF
    }

    html, body {
        font-size: 62.5%;
        background: var(--white-color);
    }

    body {
        min-height: 100%;
        color: var(--gray-color-5);
    }

    /* classes e estilos gerais */
    .container {
        margin: 0 auto;
        width: 100%;
        padding: 0 1.6rem;
        max-width: 120rem;
    }

    body, input, select, button, textarea {
        font-family: "Inter", sans-serif;
    }

    /* remove o 'X' do elemento input, Internet Explorer */
    input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
    input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
    /* remove o 'X' do elemento input, Google Chrome */
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration { display: none; }

`;
