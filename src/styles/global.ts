import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 14px
    }
    
    html, body {
        overflow-x: hidden;
    }
`