import styled from 'styled-components';

export const Wrapper = styled.div`

    position:relative;
    bottom:80px;
    height: 300px;

    @media(max-width: 1024px){
        padding: 30px 20px;
        justify-content:space-around;
        
        
    }
    @media(max-width: 550px){
        bottom:200px;
    }
`;

export const  Title = styled.h2`
    color: ${props => props.theme.colors.text}
`;
export const CardsBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding: 20px 0;
    margin:0 auto ;
`;
export const  Card = styled.a`
    text-decoration:none;

    @media(max-width:550px){
        width:100%;
       
    }
    
`;
export const CardContainer = styled.div`

    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    height:120px;
    width: 230px;
    
    padding: 15px 20px;
    
    margin-bottom:20px;
    border-radius:5px;
    background-color: ${props=> props.theme.colors.cardBackground};

    &:hover{
        background-color: ${props => props.theme.colors.cardHover}
    }

    @media(max-width:550px){
        width:100%;
       
    }
`;
 
export const LabelRow = styled.div`
    display:flex;
    justify-content:space-between;
    width: 100%;
    align-items:center;
`;
export const CardTitle = styled.p`
    color : ${props=> props.theme.colors.textBlue};
`; 
export const  Icon = styled.svg`
    margin-right:5px;
`;
export const GrowRow = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    
`;  
export const Quantity= styled.p`
    font-size: 28px;
    color : ${props => props.theme.colors.text}
`;
export const Grow = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color : ${props => props.up ? props.theme.colors.upColor : props.theme.colors.downColor}
`;
