import React from 'react';
import styled from 'styled-components';

const JobCard = ({ pic, subTitle, Title, description}) =>{
    return(
        <Card>
            <ImgContainer>
                <Img className='Image' src={pic} alt='pic'></Img>
            </ImgContainer>
            <CardContent>
                <SubTitle>{subTitle}</SubTitle>
                <TitleContainer>{Title}</TitleContainer>
                <Description>{description}</Description>
            </CardContent>
        </Card>
    )
}

const Card = styled.div`
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(30,45,62,.09);
    transition: box-shadow .2s;
    height: 100%;  
    &:hover{
        cursor:pointer;
    } 
`
const ImgContainer = styled.div`

`

const SubTitle = styled.div`
        margin-bottom: 7px;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 550;
        color:#a3afbf;
        
`

const TitleContainer = styled.h4`
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: -.2px;
    font-weight: 700;
    color:#27303b;
`

const Description = styled.p`
    line-height: 32px;
    letter-spacing: -.2px;
    color:#526173;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-bottom: 0;
`

const CardContent = styled.div`
    padding: 30px;
`

const Img = styled.img`
    width:100%;


`
export default JobCard