import React from 'react'
import Video from '../../video/videoBlue.mp4'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroH2} from './HeroElements'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH2>Charudutta Chaudhari 👋</HeroH2>
                <HeroH1>I build things for the web.</HeroH1>
                <HeroP>
                I'm a Pune-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences.
                Currently, I'm an engineering Student focused on building accessible, human-centered products. 
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
