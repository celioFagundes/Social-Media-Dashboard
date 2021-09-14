import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${props => props.theme.colors.primary};
    height: 30vh;
    
    @media(max-width: 550px){
        border-radius:20px;
        height: 45vh;
    }
    
`;
export const Container = styled.div`
    display:flex;
    color: white;
    width: 100%;
    align-items:flex-start;
    justify-content:space-between;
    padding: 30px 0px;
    
    

    @media(max-width: 550px){
        flex-direction:column;
        align-items:flex-start;
        
        
    }
    @media(max-width: 1024px){
        padding: 30px 20px
    }
`;
export const TitleContainer = styled.div`
    display:flex;
    flex-direction:column;
    
    
    @media(max-width: 550px){
        padding-bottom:10px;
        width:100%;
        &:after{
            content:'';
            width:100%;
            height:1px;
            background-color:${props => props.theme.colors.textBlue};
            margin-top:15px;
        }
    }
`;
export const Title = styled.h1`
    color : ${props => props.theme.colors.text}
`;
export const TotalFollowers = styled.p`
    margin-top: 10px;
    color : ${props => props.theme.colors.textBlue}
`;
export const ThemeToggleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    
    

    @media(max-width: 550px){
        width:100%;
        
        
    }
`;
export const SwitchLabel = styled.span`
    color : ${props => props.theme.colors.textBlue};
   
`;

