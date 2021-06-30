import React from 'react';
import { Button } from '../ButtonElements';
import Itesa from '../../images/itesa.png';
import DRAIC from '../../images/draic.png';
import { InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1,
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, BtnWrap, 
    ImgWrap, 
    Img,
    ListHead,
    ListItem,
    ListIcon,
    BtnLink
} from './ExperienceElements';

const InfoSection = ({lightBg,id,imgStart,img,topLine,darkText,lightText,headLine,buttonLabel,alt,primary,dark,dark2,href}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Subtitle darkText = {darkText}>
                                    <ListHead>
                                        <ListItem><Heading lightText={lightText}>ITESA: Web Developer</Heading></ListItem>
                                        <ListIcon src={Itesa} alt='itesa'/>
                                    </ListHead>
                                    <br></br>
                                    <ListHead>
                                        <ListItem><Heading lightText={lightText}>DRAIC: Programmer</Heading></ListItem>
                                        <ListIcon src={DRAIC} alt='itesa'/>
                                    </ListHead>  
                                </Subtitle>
                                <BtnWrap>
                                    <BtnLink href={href} target='_blank'>
                                        <Button to="home"
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact='true'
                                            offset={-80}
                                            primary={ primary ? 1:0}
                                            dark={dark?1:0}
                                            dark2={dark2?1:0}
                                        >{buttonLabel}</Button>
                                    </BtnLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
