import React from 'react';
import styled from 'styled-components'
import CourseCard from './CourseCard'

const MyOnlineCourses = () =>(
    <CourseContainer>
        <CourseTitleContainer>
            <div></div>
            <CourseTitle>My online courses</CourseTitle>
            <div></div>
        </CourseTitleContainer>
        <CourseCardGridContainer>
            <div></div>
            <CourseCard pic='https://miro.medium.com/max/1050/1*hp-yfKsmzsj711iLbM8eEw.jpeg' title='Become a UI/UX designer' subtitle='The complete design course for non-designers' description='Kickstart your design career with this self-paced online course including 3 hours of valuable information and precious downloadable resources.'/>
            <div></div>
        </CourseCardGridContainer>
        <CourseCardGridContainer>
            <div></div>
            <CourseCard pic='https://heroic.academy/wp-content/uploads/2017/08/1588x796.png' title='Streamline your workflow' subtitle='The efficient UI/UX design process in Figma' description='Create a consistent and scalable prototype in Figma in 30 mins, from wireframing all the way to handing off to developers.'/>
            <div></div>
        </CourseCardGridContainer>
    </CourseContainer>
)
const CourseContainer = styled.div`
    padding-top: 20px;
    margin-bottom: 80px;

`

const CourseTitle = styled.h2`
    font-size: 40px;
    letter-spacing: -.4px;
    font-weight: 700;
    color: #27303b;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const CourseTitleContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 8fr 3fr;
    gap:6rem;
`

const CourseCardGridContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 10fr 1fr;
    gap:6rem;
    padding: 40px 0;
`

export default MyOnlineCourses;