import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`body {
    margin: auto;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0
}

button {
    cursor: pointer;
}
:disabled {
    cursor: not-allowed;
} 
`;
