import React from 'react';
import SkillCard from './SkillCard'
import styled from 'styled-components'

import '../../styles/App_styles.css'

const SkillsSection = () =>(
        <SkillSectionContainer>
            <div>
                <SkillSectionGridContainer>
                    <div></div>
                    <SkillCard iconColor= 'blue' icon = 'fa fa-lightbulb-o' skillTitle = 'UX Designer'  skillDescription="I'm a UX designer with 7+ years of experience. I am currently a UX designer at Booking.com in Amsterdam."/>
                    <SkillCard iconColor= 'green' icon = 'fa fa-code' skillTitle = 'Front-End Developer'  skillDescription="I like coding my own designs. I implement my designs with modern HTML, CSS and basic Javascript."/>
                    <div></div>
                </SkillSectionGridContainer>

                <SkillSectionGridContainer>
                    <div ></div>
                    <SkillCard iconColor= 'blue' icon = 'fas fa-desktop' skillTitle = 'Online Teacher'  skillDescription="I'm an instructor for online courses about learning UX design, design workflows and best practices."/>
                    <SkillCard iconColor= 'yellow' icon = 'fa fa-microphone' skillTitle = 'Conference Speaker'  skillDescription='I speak at international conferences about UX design, design-development collaboration, & more.'/>
                    <div ></div>
            </SkillSectionGridContainer>
            </div>
        </SkillSectionContainer>
    )


const SkillSectionContainer = styled.div`
    margin-bottom: 70px;
    padding-top:70px;
    min-height:100vh;
    display:flex;
    align-items:center;
`

const SkillSectionGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 1fr;
    gap:7rem;
`

export default SkillsSection;