import React from 'react'
import {SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SideBtnWrap,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    BtnLink
    } from './SidebarElements';


function Sidebar({toggle,isOpen}) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>
                        Skills
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='experience' onClick={toggle}>
                        Experience
                    </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <BtnLink href='https://drive.google.com/file/d/1hfOw0uMmqzI6Q3B8hpbFzeckPTyteSWF/view?usp=sharing' target='_blank'>
                            <SidebarRoute>Resume</SidebarRoute>
                        </BtnLink>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>   
        </>
    )
}

export default Sidebar
