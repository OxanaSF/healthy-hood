
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    scrollbar-width: thin;
  }

  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

 *::-webkit-scrollbar {
   width: 8px;
 }


`

export default GlobalStyles