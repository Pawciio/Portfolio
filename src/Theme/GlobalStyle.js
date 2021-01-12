import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "VarelaRound";
  src: local("VarelaRound"),
    url("../assets/Font/VarelaRound-Regular.ttf") format("truetype");
}

*, *::before, *::after{
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body{
    font-family: "VarelaRound", sans-serif;
    font-size: 1.6rem;
    margin: 0;
    max-width: 1920px;
}

`;

export default GlobalStyle;
