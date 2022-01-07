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

    a {
        text-decoration: none;
    }

    img {
        width: 100%;
    }

    li {
        list-style: none;
    }
`;
