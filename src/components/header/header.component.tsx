
import { SwiperSlide } from 'swiper/react'
import SwipperCoponents from '../swipper/swipper.components'
import { HeaderContainer, HeaderImage, HeaderImageTeste1, HeaderImageTeste2, HeaderItem, HeaderItems } from './header.styled'

const HeaderComponent = () => {
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
      <SwiperSlide>
        <HeaderImage/>
      </SwiperSlide>
      <SwiperSlide>
        <HeaderImageTeste1/>
      </SwiperSlide>
      <SwiperSlide>
      <HeaderImageTeste2/>
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
