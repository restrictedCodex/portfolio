import React, {useState} from 'react'
import Navbar from '../componenets/Navbar';
import Sidebar from '../componenets/Sidebar';    
import HeroSection from '../componenets/HeroSection';
import InfoSection from '../componenets/InfoSection';
import Footer from '../componenets/Footer';
import { homeObjOne, homeObjTwo } from '../componenets/InfoSection/Data';
import Experience from '../componenets/Experience';
import { homeObjThree } from '../componenets/Experience/Data';
import Services from '../componenets/Services';


function Home() {
    const [isOpen, setIsOpen] =  useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <Experience {...homeObjThree}/>
        <Footer />   
        </>
    )
}

export default Home
