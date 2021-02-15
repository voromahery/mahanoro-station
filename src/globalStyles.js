import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`body {
    margin: auto;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

button {
    cursor: pointer;
}
:disabled {
    cursor: not-allowed;
} 
`;
