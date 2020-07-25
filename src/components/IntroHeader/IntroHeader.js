import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components';
import '../../styles/IntroHeader_styels.css'
import '../../styles/App_styles.css'

const IntroHeader = () =>{
    return(
        <div className='introHeader'>
            <header>
                <NavBar/>
            </header>
            
            <HeaderGridContainer>
                <div></div>
                <HeaderWrapper>
                    <IntroText>
                        Hi! I’m Nicole.
                        <br/>
                        I design stuff.
                    </IntroText>
                </HeaderWrapper>
                <div></div>
                
            </HeaderGridContainer>
            <IntroContainer>
                <div></div>
                <IntroCard>
                    <ImageContainer>
                        <img className='Image1' src='https://nicolesaidy.com/images/profile.jpg' alt='pic'/>
                    </ImageContainer>
                    <TextContainer>
                        <Text>
                            I'm a UX designer based in Amsterdam.
                            I'm passionate about travel, 
                            collaboration and shaping new 
                            designers through my activities as a 
                            blogger, speaker and course author.
                        </Text>
                    </TextContainer>
                </IntroCard>
                <div></div>
            </IntroContainer>
        </div>
    )
}


const IntroText = styled.h1`
    font-size:56px;
    line-height: 1.4;
    font-weight: 900;
    letter-spacing: -.8px;
    color: #27303b;
`

const HeaderGridContainer = styled.div`
    display:grid; 
    grid-template-columns: 1fr 10fr 1fr;
    gap:6rem;
`

const HeaderWrapper = styled.div`
    display:flex;
    align-items:center;
    min-height: calc(100vh - 134px)
`

const IntroContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 10fr 1fr;    
    gap:6rem;
    padding:3rem 0;
`

const ImageContainer = styled.div`
    width: 300px;
    height:300px;
    justify-self:center;
    /* margin-right: 4rem; */
    margin-left: 1rem;

`

const TextContainer = styled.div`
 
    display:flex;
    justify-content:center;
    align-items:center;
  
    
    
`
const IntroCard = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;

`


const Text = styled.h5 `
    color:#27303b;
    line-height: 1.7;
    font-weight: 400 !important;
    font-size: 24px !important;
    letter-spacing:-.2px;
    
`
export default IntroHeader;