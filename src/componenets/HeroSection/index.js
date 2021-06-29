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
                <HeroP>Hi 👋 I am </HeroP>
                <HeroH1>Charudutta Chaudhari</HeroH1>
                <HeroH2>
                I build things for the web.
                </HeroH2>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
