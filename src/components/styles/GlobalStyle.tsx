import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }

   body {
        background-color: #0b2347;
        background-image: url("./images/bg_img.png");
        background-position: center center;
        background-repeat: repeat-y;
        color: #fff;
    }

    a {
        text-decoration: none;
    }

    img {
        /* width: 100%; */
    }

    li {
        list-style: none;
    }
`;
