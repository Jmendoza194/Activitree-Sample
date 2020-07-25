import React from 'react';
import styled from 'styled-components'

import TalkCard from './TalkCard'


const Mytalks = () =>(
    <TalkContainer>
        <div>
            <TalkTitleContainer>
                <div></div>
                <TalkTitle>Some of my talks</TalkTitle>
                <div></div>
            </TalkTitleContainer>
            <TalkCardGridContainer>
                <div></div>
                <CardWrapper>
                    <TalkCard title='Designing great progressive web apps' description='A look into PWAs from a design perspective, and guidelines for designing great PWAs.'/>
                    <TalkCard title='UX patterns for web developers' description='Developer-friendly UX patterns that developers should start using in their everyday code.'/>
                    <TalkCard title='Bridging the designer developer gap' description='How to better communicate through tips & tricks for a smarter workflow.'/>
                </CardWrapper>
                <div></div>
            </TalkCardGridContainer>
            <ButtonGridContainer>
                <div></div>
                <BlueButton>Invite Me to Speak</BlueButton>
                <WhiteButton>Watch Me Speak</WhiteButton>
                <div></div>
            </ButtonGridContainer>
        </div>
    </TalkContainer>
)

const TalkTitle = styled.h2`
    margin-top: 30px;
    margin-bottom: 0;
    font-size: 40px;
    letter-spacing: -.4px;
    color:#27303b;
    font-weight: 700;
`

const TalkContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
`

const TalkTitleContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    gap:6rem;
`

const TalkCardGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    gap:6rem;
`

const CardWrapper = styled.div`
    display:grid;
    grid-template-columns: 4fr 4fr 4fr;
    gap:6rem;
`
const ButtonGridContainer = styled.div`
    padding: 3rem 0;
    display:grid;
    grid-template-columns: 1fr 3fr 3fr 5fr;
    gap:6rem;
`
const BlueButton = styled.div`
    text-align:center;
    background-image: linear-gradient(-133deg,#7282eb,#74aee3);
    color: white;
    font-size: 16px;
    font-weight:600;
    padding:16px 10px;
    border-radius:30px;
    &:hover{
        cursor:pointer;
    }
`

const WhiteButton = styled.div`
    text-align:center;
    background-color: white;
    color: #74aee3;
    border: 1px solid;
    border-color:#74aee3;
    font-size: 16px;
    font-weight:600;
    padding:16px 10px;
    border-radius:30px;
    &:hover{
        cursor:pointer;
    }   
`


export default Mytalks;

