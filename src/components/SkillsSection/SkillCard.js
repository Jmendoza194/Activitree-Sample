import React from 'react';
import styled from 'styled-components';

const SkillCard = ({ iconColor, icon, skillTitle, skillDescription }) =>{

    return(
        <SkillCardContainer >
            <div>
                <IconContent iconColor={iconColor} className={icon}></IconContent>
                <SkillTitle>{skillTitle}</SkillTitle>
                <SkillDescription>{skillDescription}</SkillDescription>  
            </div>
        </SkillCardContainer>
    )
}

const SkillCardContainer = styled.div`
    margin-bottom: 40px;
`

const SkillTitle = styled.h3`
    font-size: 30px;
    margin-top:20px;
    font-weight:700;
    letter-spacing:-.4px;
    color:#27303b;
`

const SkillDescription = styled.p`
    line-height:32px;
    letter-spacing:-.2px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const IconContent = styled.i`
    font-size: 60px;
    color: ${props => props.iconColor};
`

export default SkillCard;