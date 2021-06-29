import React from 'react'
import Pic1 from '../../images/trvl.svg'
import Pic2 from '../../images/payment.svg'
import Pic3 from '../../images/health.svg'

import { ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    ServicesP,
    ServicesIcon,
    Anl 
} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='projects'>
        <ServicesH1>Featured Projects</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Pic1}/>
            <ServicesH2>Outro-Trip Manager</ServicesH2>
            <ServicesP>An Trip manager for your travel plans made using React.js and Bootstrap</ServicesP>
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Pic2}/>
            <ServicesH2>Expanse</ServicesH2>
            <ServicesP>A Fullstack payments and expense monitoring app made with MERN stack.</ServicesP>
          </ServicesCard>
          <Anl href='https://drive.google.com/file/d/1h47mb7tfT7nSBLGNtyxA6YIt9NdSM5NR/view?usp=sharing' alt='drivelink' target='_blank'>
            <ServicesCard>
              <ServicesIcon src={Pic3}/>
              <ServicesH2>QMHST</ServicesH2>
              <ServicesP>A quarentine health monitoring tool made for doctors during quarentne using IOT</ServicesP>
            </ServicesCard>
          </Anl>
        </ServicesWrapper>
      </ServicesContainer>
    )
}

export default Services