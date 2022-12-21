import { Swiper, SwiperProps } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import React from 'react'
import 'swiper/css'

interface SwiperPropes {
    children?: React.ReactNode
    settings: SwiperProps
}

export default function SliderSwiper ({ settings, children }: SwiperPropes) {
  return (
    <Swiper modules={[Navigation, A11y]} {...settings}>
        {children}
    </Swiper>
  )
}
