import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const AddForm = styled.form`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-bottom:20px;
    @media(max-width: 1024px){
        padding: 0px 20px;            
    }   
`;

export const AddButton = styled.button`
    display: ${props => props.display ? 'none' : 'inline-block'};
    background: #1EB589;
    color : white;
    font-weight:700;
    border:0;
    padding:5px 10px;
    border-radius:10px; 
`;

export const NewLoginData = styled.div`
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content:flex-start;
    align-items:center;
    flex-wrap:wrap;    
`;

export const SocialMediasList = styled.select`
    border:0;
    padding:5px 10px;
    border-radius:10px;
    margin-right:5px;
    margin-bottom:10px;
    outline: none;
    background-color: ${props => props.theme.colors.cardBackground};
    color: ${props => props.theme.colors.textBlue}; 
    
`;

export const FormBox = styled.div`

   margin-bottom:10px;
   
`;

export const FormInput = styled.input`
    border:0;
    padding:6px 15px;
    border-radius:10px;
    margin-right:5px;
    outline: none;
    background-color: ${props => props.theme.colors.cardBackground};
    color: ${props => props.theme.colors.textBlue};

    @media(max-width:430px){
        margin-bottom:10px;
    }
    ::placeholder{
        color:${props => props.theme.colors.textBlue};
    }
    ::-ms-reveal,::-ms-clear{
        filter: ${props => props.theme.colors.filter};
        }
`;

export const FinishButton = styled.button`
    border:0;
    background-color: transparent;
    margin-right:10px;
`;

export const CancelButton = styled.button`
    border:0;
    background-color: transparent;

`;
export const DeleteButton = styled.div`
    display:flex;
    width:100%;
    visibility:hidden;
    justify-content:flex-end;
    padding-right:5px;
    padding-top:2px;
`;

export const CardsSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    flex-wrap:wrap;

    @media(max-width: 1024px){
        padding: 0px 20px;       
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
    margin-right:20px;
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
    &:hover ${DeleteButton}{
        visibility:visible;    
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
    margin-left:15px;
`;

export const FollowersBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin:15px 0;
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
    color : ${props => props.increase === true ? props.theme.colors.upColor : props.theme.colors.downColor};
`;