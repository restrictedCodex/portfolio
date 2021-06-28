import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import { ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    ServicesP,
    ServicesIcon 
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='projects'>
        <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>We help your fess and increase your overall revenue.</ServicesP>
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Icon1}/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>you can acess our plataform online anywhere in the world.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reduce expenses</ServicesH2>
            <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    )
}

export default Services