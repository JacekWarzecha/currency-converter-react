import { createGlobalStyle } from "styled-components";
import cantor from "./cantor.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

#root {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 20px;
  margin: 0 auto;
  padding: 10px 25px 40px 25px;
  background-image: url("${cantor}");
  overflow: auto;
  background-size: cover;
  background-position: center;
  background-attachment: scroll;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
`;
