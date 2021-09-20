import React, {useState} from 'react';
import IconSelector from '../IconSelector/IconSelector' 

import {AiFillCheckCircle} from 'react-icons/ai'
import {MdCancel} from 'react-icons/md'

import Overview from '../Overview';
import 
    { 
    Wrapper,
    CardsSection,
    Card,
    CardContainer,
    UserInfo,
    Icon,
    Username,
    FollowersBox,
    FollowersTotal,
    FollowersLabel,
    FollowersIncrease,
    AddForm,
    AddButton,
    SocialMediasList,
    FormBox,
    FormInput,
    FinishButton,
    NewLoginData,
    CancelButton,
    DeleteButton,
    } from './styles';

export default function MediasSection(props) {

    const [displayAdd, setDisplayAdd] = useState(false);
    const [selectedMedia,setSelectedMedia] = useState('');
    const [newUsername,setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [currentBorderColor,setcurrentBorderColor] = useState('');
    const [cardsList,setCardsList] = useState([]);
    const [currentCardLabel,setCurrentCardLabel] = useState('Followers');
    const [currentOverviewLabel,setCurrentOverviewLabel] = useState('');

    const HandleSelection = e =>{
        setSelectedMedia(e.target.value)
        switch(e.target.value){
            case 'facebook': 
                setcurrentBorderColor('hsl(208, 92%, 53%)')
                setCurrentOverviewLabel('Page Views')
            break ;
            case 'twitter':
                setcurrentBorderColor('hsl(203, 89%, 53%)')
                setCurrentOverviewLabel('Retweets')   
            break;
            case 'instagram': 
                setcurrentBorderColor('linear-gradient(to right,#f8be6a,#e14b95)')
                setCurrentOverviewLabel('Likes')
               
                break;
            case 'youtube': 
                setcurrentBorderColor('hsl(348, 97%, 39%)')
                setCurrentOverviewLabel('Shares')
                setCurrentCardLabel('Subscribers')
                break;
            default : return <></>;
    }
    }
    const handleUsername =  e=>{
        setNewUsername(e.target.value)
    }

    const handlePassword = e =>{
        setNewPassword(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault()
        setCardsList([...cardsList,
            {id: Math.floor(Math.random() * (100 - 1)) + 1, 
            username: newUsername, 
            iconName: selectedMedia,
            cardLabel: currentCardLabel,
            totalNumbers: Math.floor(Math.random() * (100000 - 1)) + 1,
            totalIncrease: Math.floor(Math.random() * (1000- 1)) + 1,
            borderColor : currentBorderColor,
            growIncrease: Math.random()< 0.5,
            growToday: Math.floor(Math.random() * (500- 1)) + 1,
            growPercentage: Math.floor(Math.random() * (30- 1)) + 1,
            overviewLabel: currentOverviewLabel,
            }])
        setNewUsername('')
        setNewPassword('')
        setSelectedMedia('')
        setDisplayAdd(!displayAdd) 
        setcurrentBorderColor('')
        setCurrentCardLabel('Followers')
    }
    const handleCancel = () =>{
        setNewUsername('')
        setNewPassword('')
        setSelectedMedia('')
        setDisplayAdd(!displayAdd)
        setcurrentBorderColor('') 
        setCurrentCardLabel('Followers')
    }
    const handleDelete = id =>{

        let newList = cardsList.filter((item) => item.id !== id)
        setCardsList(newList)
    }

    return(

        <Wrapper className = 'container'>

            <AddForm onSubmit={handleSubmit}>
                <AddButton 
                onClick = {() => setDisplayAdd(!displayAdd)} 
                display = {displayAdd ? 1 : 0} 
                type ='button'>+ New</AddButton>
                <NewLoginData display = {displayAdd ? 1 : 0 }>
                    <SocialMediasList  
                    onChange ={HandleSelection} value = {selectedMedia} required>
                        <option value="" hidden>Choose here </option>
                        <option value="facebook">Facebook</option>
                        <option value="twitter">Twitter</option>
                        <option value="instagram">Instagram</option>
                        <option value="youtube">Youtube</option>                      
                    </SocialMediasList>
                    <FormBox>
                        <FormInput
                        required
                        type = 'text'
                        onChange ={handleUsername}
                        value ={newUsername}
                        placeholder ='@username' />
                        <FormInput
                        required
                        type="password"
                        placeholder ='Password'
                        onChange = {handlePassword}
                        value ={newPassword} />
                    </FormBox>
                    <FormBox>
                        <FinishButton type="submit">
                            <AiFillCheckCircle size = {23} color = '#1EB589'/>
                        </FinishButton>
                        <CancelButton  type  ='button' onClick = {handleCancel}>
                            <MdCancel  size = {23} color = '#DC414C'/>
                        </CancelButton>
                    </FormBox>
                </NewLoginData>
            </AddForm>

            <CardsSection >
                {cardsList.map((item)=>(
                    <Card key = {item.id} href = '#'>
                        <CardContainer borderColor ={item.borderColor}>
                            <DeleteButton>
                                <MdCancel  
                                size = {15} 
                                color = '#DC414C' 
                                onClick ={() =>handleDelete(item.id)}/>
                            </DeleteButton>
                            <UserInfo>
                                <IconSelector iconName ={item.iconName}/>
                                <Username>{item.username}</Username>                               
                            </UserInfo>
                            <FollowersBox>
                                <FollowersTotal>{item.totalNumbers}</FollowersTotal>
                                <FollowersLabel>{item.cardLabel}</FollowersLabel>
                            </FollowersBox>
                            <FollowersIncrease increase = {item.growIncrease}>
                                
                                {item.growIncrease 
                                ? <Icon xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                                <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/>
                                </Icon>
                                :
                                <Icon xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                                <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/>
                                </Icon>
                                }
                                
                                {item.totalIncrease
                                } today
                            </FollowersIncrease>
                        </CardContainer>
                    </Card>
                ))}
            </CardsSection>
            
            <Overview cardList = {cardsList}/>

        </Wrapper>
        
    )
};
