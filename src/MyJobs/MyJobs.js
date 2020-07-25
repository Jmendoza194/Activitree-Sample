import React from 'react';
import styled from 'styled-components'
import JobCard from './JobCard'
import '../styles/App_styles.css';



const MyJobs = () => (
    <JobContainer>
        <TitleJobContainer>
            <div></div>
            <Title>Some of my work</Title>
            <div></div>
        </TitleJobContainer>
        <JobCardContainer>
            <div></div>
            <JobCard pic='https://tools.kali.org/wp-content/uploads/2017/03/faraday-web-dash.png' subTitle= 'UI/UX BRANDING' Title='Web Dash' description='Designed logo, brand identity, landing page and web app for Webdash, the customizable web dashboard.'/>
            <JobCard pic='https://techcrunch.com/wp-content/uploads/2019/04/kiwi-campus-robot-1.jpg' subTitle= 'UI/UX BRANDING MOBILE' Title='Kiwi Delivery App' description='Designed logo, brand identity and mobile app for Kwiki, a food and service ordering app for resorts & hotels.'/>
            <div></div>
        </JobCardContainer>
            
        <JobCardContainer>
            <div></div>
            <JobCard pic='https://i.imgur.com/j8Ywjgn.jpg' subTitle= 'UI/UX BRANDING' Title='Laravel Angular' description='An open source project for building consistent APIs. I designed the logo, brand identity, website and documentation.'/>
            <JobCard pic='https://user-images.githubusercontent.com/3104648/28351989-7f68389e-6c4b-11e7-9bf2-e9fcd4977e7a.png' subTitle= 'UI/UX HTML/CSS' Title='PWA Workshop' description='A workshop about PWAs that I present in conferences and companies. Designed logo, brand identity and one pagewebsite.'/>
            <div></div>
        </JobCardContainer>
        <ButtonWrapper>
            <div></div>
            <BlueButton>See All My Projects</BlueButton>
            <div></div>
        </ButtonWrapper>
        
    </JobContainer>
)





const JobCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 1fr;
    gap:7rem;
    padding: 16px 0;
    
    margin: 0;

`

const Title = styled.h2`
    font-size:40px;
    letter-spacing:-.4px;
    font-weight:700;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const TitleJobContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    gap:6rem;
`

const JobContainer = styled.div`
    background-color: #f5f7f9;
    padding-bottom: 70px;
    padding-top: 20px;
`
const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 8fr;
    gap:6rem;
`
const BlueButton = styled.button`
    padding: 16px 30px;
    border-radius: 30px;
    color: #fff;
    background-size: 100%;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    background-image: linear-gradient(-133deg,#7282eb,#74aee3);
    display: inline-block;
    border:none;
    margin-top: 2rem;

    &:hover{
        cursor:pointer;
    } 
`


export default MyJobs;