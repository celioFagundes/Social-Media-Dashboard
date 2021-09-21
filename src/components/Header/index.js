import React from 'react';
import { useCountFollowers } from '../ContextFollowers/totalfollowers';
import Switch from '../Switch'
import { Wrapper,Container ,TitleContainer,Title,TotalFollowers,ThemeToggleContainer,SwitchLabel} from './styles';

const Header = (props) => {
    const {totalFollowers} = useCountFollowers();
    return(

        <Wrapper>
            
            <Container className = 'container'>
                <TitleContainer>
                    <Title>Social Media Dashboard</Title>
                    <TotalFollowers>Total Followers: {totalFollowers}</TotalFollowers>
                </TitleContainer>
                
                <ThemeToggleContainer>
                    <SwitchLabel>
                        Dark Mode
                    </SwitchLabel>
                    <Switch onToggle ={() =>{props.toggleTheme()}} isToggled ={props.theme === 'dark' ? true : false}/>
                </ThemeToggleContainer>
            </Container>
        </Wrapper>
    );
};
export default Header;