import React from 'react';
import styled from 'styled-components';

const TalkCard = ({ title, description }) =>(
    <TalkCardContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </TalkCardContainer>

)

const TalkCardContainer = styled.div`

`

const CardTitle = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color:#27303b;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`
const CardDescription = styled.p`
    margin-top: 25px;
    line-height: 32px;
    letter-spacing: -.2px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color:#526173;
`
export default TalkCard