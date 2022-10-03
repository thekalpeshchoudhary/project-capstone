import { createGlobalStyle } from "styled-components";

export const GlobalSyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Trispace", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 40px;

  @media screen and (max-width: 800px){
    padding: 10px;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
.hidden {
  display: none;
}
`;
