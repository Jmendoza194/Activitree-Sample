import React from 'react';
import styled from 'styled-components'

const FooterEnd = () =>(
        <Footer>
            <LetsConnect>
                <ContentWrapper>
                    <h1>Let's Connect</h1>
                    <p>I'm interested in chatting about design, feel free to connect with me on any of the social platforms below.</p>
                </ContentWrapper>
            </LetsConnect>
            <SocialMediaIcons>
                <IconWrapper>
                    <IconContent className="fa fa-twitter"></IconContent>
                    <IconContent className="fa fa-instagram"></IconContent>
                    <IconContent className="fa fa-behance"></IconContent>
                    <IconContent className="fa fa-youtube-play"></IconContent>
                </IconWrapper>
            </SocialMediaIcons>
            <MadeBy>
                <p>
                Handcrafted By
                <span>❤</span>
                yours truly
                </p>
            </MadeBy>
        </Footer>
    )


const Footer = styled.footer`
    padding-top:3rem;

`

const LetsConnect = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    min-height: calc(100vh - 148px);
    background-image: linear-gradient(-133deg,#7282eb,#74aee3);
`

const ContentWrapper = styled.div`
    color: #fff;
    padding: 0 20px;
    text-align:center;
    max-width: 500px;
`

const SocialMediaIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    background-color:#27303b;
    color:#526173;
    padding: 20px 0 ;
`

const IconWrapper = styled.div`
    display:flex;
    justify-content: space-around;
`

const MadeBy = styled.div`
     background-color:#1d262f;
     padding: 10px 0;
     text-align:center;
     color: hsla(0,0%,100%,.7);
`
const IconContent = styled.i`
    margin: 10px 20px;
    display: inline-block;
    font-size: 28px;
`
export default FooterEnd