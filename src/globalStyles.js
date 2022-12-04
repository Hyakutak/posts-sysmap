import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        --color-green: #82efaa;
        --color-blue-dark: #2b6de3;
        --color-blue-light: #18b1ef;
    }
    .css-79ws1d-MuiModal-root {
        overflow: auto;
    }
`;

export default GlobalStyle;