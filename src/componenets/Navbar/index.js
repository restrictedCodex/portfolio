import React,{useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink,
        BtnLink 
    } from './NavbarElements';

import {animateScroll as scroll} from 'react-scroll';


function Navbar({toggle}) {

    const [scrollNav,setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
           <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Portfolio</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >About</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='skill'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Skills</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Projects</NavLinks> 
                        </NavItem>
                        <NavItem>
                            <NavLinks to='experience'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80}
                            >Experience</NavLinks> 
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <BtnLink href='https://drive.google.com/file/d/1hfOw0uMmqzI6Q3B8hpbFzeckPTyteSWF/view?usp=sharing' target='_blank'>
                            <NavBtnLink>Resume</NavBtnLink>
                        </BtnLink>
                    </NavBtn>
                </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar
