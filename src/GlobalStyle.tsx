import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;   
        line-height: 1;
        list-style: none;
        border-collapse: collapse;
        border-spacing: 0;
    }
`

export default GlobalStyle