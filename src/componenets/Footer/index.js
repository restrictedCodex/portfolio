import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithubSquare} from 'react-icons/fa'
import { FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterInfo 
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';



const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                Portfolio
              </SocialLogo>
              <FooterInfo>
              <WebsiteRights>Portfolio © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <WebsiteRights>Made with ⚛ and ☯</WebsiteRights>
              <WebsiteRights>Work in progress so Vist again </WebsiteRights>
              </FooterInfo>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='https://www.instagram.com/restrictedcharudutta/' target='_blank' arial-label='Instagram'>
                  <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href='https://github.com/restrictedCodex' target='_blank' arial-label='GitHub'>
                  <FaGithubSquare/>
                </SocialIconLink>
                <SocialIconLink href='https://twitter.com/restrictedcharu' target='_blank' arial-label='Twitter'>
                  <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href='https://www.linkedin.com/in/charudutta-chaudhari-a980661a0/' target='_blank' arial-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    )
}

export default Footer
