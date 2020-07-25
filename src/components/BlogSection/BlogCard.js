import React from 'react';
import styled from 'styled-components'


const BlogCard = ({ pic, title, description }) =>(
    <BlogCardContainer>
        <ImageContainer>
            <Image src={pic} alt='pic'></Image>
        </ImageContainer>
        <ContentContainer >
            <TitleContainer>{title}</TitleContainer>
            <DescriptionContainer>{description}</DescriptionContainer>
        </ContentContainer>
    </BlogCardContainer>
)

//Add shadow shit
const BlogCardContainer = styled.div`
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(30,45,62,.09);
    transition: box-shadow .2s;
    height: 100%;
    /* &:hover{
        
    } */
`

const ImageContainer = styled.div`

`

const Image = styled.img`
    width:100%;
`
const ContentContainer = styled.div`
    display:block;
    padding:30px;
`

const TitleContainer = styled.h2`
    font-size: 24px;
    line-height: 34px;
`

const DescriptionContainer = styled.p`
    line-height: 32px;
    letter-spacing: -.2px;
    display:block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
export default BlogCard