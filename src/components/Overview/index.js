import React from 'react';

import IconSwitch from './IconSwitch';

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
    Grow} from './style';

const cardsInfo = [
    {
        key : 1,
        title: 'Page Views',
        iconName: 'facebook',
        quantity: '87',
        grow: '3%',
        up: true,
        
    },
    {
        key : 2,
        title: 'Likes',
        iconName: 'facebook',
        quantity: '52',
        grow: '2%',
        up: false,
        
    },
    {
        key : 3,
        title: 'Likes',
        iconName: 'instagram',
        quantity: '5462',
        grow: '2257%',
        up: true,
        
    },
    {
        key : 4,
        title: 'Profile Views',
        iconName: 'instagram',
        quantity: '52k',
        grow: '1375%',
        up: true,
        
    },
    {
        key : 5,
        title: 'Retweets',
        iconName: 'twitter',
        quantity: '117',
        grow: '303%',
        up: true,
        
    },
    {
        key : 6,
        title: 'Likes',
        iconName: 'twitter',
        quantity: '107',
        grow: '19%',
        up: false,
        
    },
    {
        key : 7,
        title: 'Total Views',
        iconName: 'youtube',
        quantity: '1047',
        grow: '12%',
        up: false,
        
    },
    {
        key : 8,
        title: 'Page Views',
        iconName: 'youtube',
        quantity: '87',
        grow: '3%',
        up: true,
    },
    
]
export default function Overview(props) {
    return(
        <Wrapper className = 'container'>
            <Title>Overview - Today</Title>
            <CardsBox>
                {cardsInfo.map((card) =>(
                    <Card key = {card.key} href= '#'>
                    <CardContainer>
                        <LabelRow>
                            <CardTitle>{card.title}</CardTitle>
                            <IconSwitch iconName = {card.iconName}/>                          
                        </LabelRow>                   
                        <GrowRow>
                            <Quantity>
                                {card.quantity}
                            </Quantity>
                            <Grow up = {card.up}>
                                {card.up 
                                ?<Icon xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                                    <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/>
                                </Icon> 
                                :<Icon xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                                    <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z"/>
                                </Icon>}
                                {card.grow}
                            </Grow>
                        </GrowRow> 
                    </CardContainer>
                </Card>
                ))}
                
            </CardsBox>
        </Wrapper>
    )
};
