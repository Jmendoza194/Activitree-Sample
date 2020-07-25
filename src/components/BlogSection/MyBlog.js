import React from 'react';
import styled from 'styled-components'
import BlogCard from './BlogCard'


const MyBlog = () =>{
    return(
        <BlogContainer>
            <div>
                <BlogTitleContainer>
                    <div></div>
                    <BlogTitle>On my blog</BlogTitle>
                    <div></div>
                </BlogTitleContainer>
                <BlogCardGridContainer>
                    <div></div>
                    <BlogCard pic='https://www.expertsfromindia.com/tech-talk/images/easyblog_articles/850/01.jpg' title='7 steps to become a UI/UX designer' description='What is good design and bad design? Here are tips & resources to help you get started.'></BlogCard>
                    <BlogCard pic='https://miro.medium.com/max/4794/1*inxNksTVvoKC9fXkbhhrCw.png' title='5 apps I can’t live without as a freelancer' description='Life is too short for a 9 to 5 job. Making a living as a freelancer is the best way there is.'></BlogCard>
                    <div></div>
                </BlogCardGridContainer>
                <ButtonWrapper>
                    <div></div>
                    <BlueButton>See All My Projects</BlueButton>
                    <div></div>
                </ButtonWrapper>
            </div>
        </BlogContainer>
    )
}

const BlogCardGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 1fr;
    gap:7rem;

`

const BlogContainer = styled.div`
    background-color:  #f5f7f9;
    min-height: 100vh;
    padding-top: 20px;
    display:flex;
    align-items:center;
`

const BlogTitleContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 10fr 1fr;
    gap: 6rem;
    padding: 40px 0;
`

const BlogTitle = styled.h2`
    font-size: 40px;
    letter-spacing: -.4px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const ButtonWrapper = styled.div`
    padding-bottom: 5rem;
    
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

export default MyBlog;