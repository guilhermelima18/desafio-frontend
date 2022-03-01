import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  :root {
    --primary-color: #181b23;
    --primary-color-hover: #c3c9d9;
    --secondary-color: #F18018;
    --secondary-color-hover: #cf7019;
  }

  a {
    text-decoration: none;
  }

  h1, h2 {
    font-weight: 600;
  }

  h3, h4 {
    font-weight: 400;
  }

  h5, a, p, span {
    font-weight: 300;
  }

  button {
    cursor: pointer;
  }
`;
