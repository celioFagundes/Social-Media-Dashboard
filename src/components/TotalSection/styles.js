import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap:wrap;
    position: relative;
    bottom: 80px;
    padding:0;
    margin: 0 auto;  
    

    @media(max-width: 1024px){
        padding: 30px 20px;
        justify-content:space-between;
        
        
    }
    @media(max-width: 550px){
        bottom:190px
    }
    
  
`;
export const Card = styled.a`
    text-decoration: none;
    @media(max-width:550px){
        width:100%;
       
    }

 
    
`;
export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    height: 190px;
    padding-bottom:20px;
    margin-bottom:20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${props => props.theme.colors.cardBackground};
   
    &:before{
    content:'';   
    position:relative;   
    width: 230px; 
    height:5px;
    background: ${ props => props.borderColor};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    @media(max-width:550px){
        width:100%;
    }
}
    &:hover{
        background-color: ${props => props.theme.colors.cardHover}
    }

    @media(max-width:550px){
        width:100%;
       
    }

`;
export const UserInfo = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`; 
export const Icon  = styled.svg`
    margin-right:10px;
`;
export const  Username= styled.p`
    color: ${props => props.theme.colors.textBlue};
`;
export const FollowersBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;
export const FollowersTotal = styled.p`
    color: ${props => props.theme.colors.text};
    font-size:50px;
`;
export const FollowersLabel = styled.label`
    letter-spacing:4px;
    font-weight:400;
    color: ${props => props.theme.colors.textBlue};
    text-transform:uppercase;
`;
export const FollowersIncrease = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    color : ${props => props.up === true ? props.theme.colors.upColor : props.theme.colors.downColor};
`;