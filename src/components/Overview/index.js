import React from 'react';
import { useAccountsList } from '../ContextAccounts/accounts';
import IconSelector from '../IconSelector/IconSelector';

import {
    Wrapper,
    Title,
    CardsBox,
    Card,
    CardContainer,
    LabelRow,
    CardTitle,
    Icon,
    GrowRow,
    Quantity,
    Grow
    ,InitialMessage} from './style';

export default function Overview() {
    
    const {accountsList} = useAccountsList()
    return(

        <Wrapper className = 'container'>
            {accountsList.length >0 ?
            <Title>Overview - This week</Title>
            : <></>}
            <CardsBox>              
                { accountsList.length > 0
                ?   
                accountsList.map((card) =>(
                    <Card key = {card.id} href= '#'>
                        <CardContainer>
                            <LabelRow>
                                <CardTitle>{card.overviewLabel}</CardTitle>
                                <IconSelector iconName = {card.iconName}/>                          
                            </LabelRow>                   
                            <GrowRow>
                                <Quantity>
                                    {card.growToday}
                                </Quantity>
                                <Grow increase = {card.growIncrease}>
                                    {card.growIncrease
                                    ?<Icon xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                                        <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/>
                                    </Icon> 
                                    :<Icon xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                                        <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/>
                                    </Icon>}
                                    {card.growPercentage}%
                                </Grow>
                            </GrowRow> 
                        </CardContainer>
                    </Card>))
                : 
                
                <InitialMessage> No Social Medias yet</InitialMessage> }    
            </CardsBox>
        </Wrapper>
    )
};
