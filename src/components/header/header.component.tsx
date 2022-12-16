
import { FunctionComponent } from 'react'
import { SwiperSlide } from 'swiper/react'
import SliderTypes from '../../types/slider'
import SwipperCoponents from '../swipper/swipper.components'
import { HeaderContainer, HeaderImage, HeaderItem, HeaderItems } from './header.styled'

interface SliderProp{
  slider: SliderTypes
}

const HeaderComponent: FunctionComponent<SliderProp> = ({ slider }) => {
  const settings = {
    spaceBetween: 50,
    slidePerView: 3,
    autoplay: true,
    pagination: {
      clickable: true
    }
  }
  return (
    <>
    <SwipperCoponents settings={settings}>
      <SwiperSlide >
        <HeaderImage backgroundImage={slider.imageUrl} />
      </SwiperSlide>
    </SwipperCoponents>
    {/* <HeaderImage/> */}
    <HeaderContainer>
        <HeaderItems>
            <HeaderItem>teste</HeaderItem>
            <HeaderItem>teste</HeaderItem>
            <HeaderItem>teste</HeaderItem>
            <HeaderItem>teste</HeaderItem>
        </HeaderItems>
    </HeaderContainer>
    </>
  )
}

export default HeaderComponent
