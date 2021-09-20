import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    *{
        margin:0;
        padding:0;
        box-sizing:border-box; 
        
    }
    body{
        background-color: ${props=> props.theme.colors.background};
        font-family: 'Inter', sans-serif;
        font-size:14px;
        font-weight: 700;

    }
    .container{
        max-width: 1024px;
        margin: 0 auto
    }
    
`;
