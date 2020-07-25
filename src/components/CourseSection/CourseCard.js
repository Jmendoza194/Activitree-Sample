import React from 'react'
import styled from 'styled-components'

const CourseCard = ({pic, title, subtitle, description}) =>(
    <CourseCardContainer>
        <ImgContainer>
            <Image src={pic} alt='Picture'></Image>
        </ImgContainer>
        <ContentContainer>
            <TitleConent>{title}</TitleConent>
            <SubTitleContent>{subtitle}</SubTitleContent>
            <DescriptionContent>{description}</DescriptionContent>
        </ContentContainer>
    </CourseCardContainer>
)

const CourseCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0,1fr));
    gap: 40px;
`
const TitleConent = styled.h4`
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: -.2px;
    color:#27303b;
`

const SubTitleContent = styled.p`
    margin-top: 5px;
    opacity: .7;
    margin-bottom: 25px;
    line-height: 32px;
    letter-spacing: -.2px;
`

const DescriptionContent = styled.p`
    line-height: 32px;
    letter-spacing: -.2px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

`

const ImgContainer =   styled.div`
    grid-column-end: span 4;
`

const Image = styled.img`
    width:100%;
    height: 100%;
`

const ContentContainer = styled.div`
    grid-column-end: span 8;
`



export default CourseCard;