import React from 'react';
import styled from 'styled-components'


const NavBar = () => {
    return(
        <NavContainer>
            {/* temporary */}
            <div></div>
            <div>
                <div className='navBar_container'>
                    <Icon>Icon</Icon>
                    <ButtonWrapper>
                        <NavButton>Blog</NavButton>
                        <NavButton>Courses</NavButton>
                        <NavButton>Mentor</NavButton>
                    </ButtonWrapper>
                </div>
            </div>
            <div></div>
            </NavContainer>
    )
}

const NavContainer = styled.div`
    margin-top: 30px;
    display:grid;
    grid-template-columns: 1fr 10fr 1fr;
    gap: 6rem;
`

const ButtonWrapper = styled.div`
   
`

const Icon = styled.p`
    /* padding:1rem; */
`

const NavButton = styled.button`
    background-color:transparent;
    border:none;
    margin: 0 12px;
    font-size:16px;
    font-weight: 700;
    color:#27303b;
`

export default NavBar;