import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        font-family: 'Inter', sans-serif;
    }

    :root{
        --color-primary: #FF577F;
        --color-primary-Focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --sucess: #3FE864;
        --negative: #E83F5B;
    }

    button{
        border-radius: 8px;
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        border: 2px solid;
    }

    input,select{
        background: var(--grey-2);
        border: 1.2182px solid var(--grey-2);
        border-radius: 4px;
        outline: none;
        font-family: 'Inter', sans-serif;
        padding: 0.625rem 1rem;
        color: var(--grey-1);
    }
    input::placeholder{
        color: var(--grey-1);
    }
    input:focus{
        border: 1.2182px solid var(--grey-0);
    }
    input:focus::placeholder{
        color: var(--grey-0);
    }
`;
