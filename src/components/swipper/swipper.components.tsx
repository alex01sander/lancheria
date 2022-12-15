import { Swiper, SwiperProps } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import React, { FunctionComponent } from 'react'
import { Pagination, Autoplay } from 'swiper'

interface Children{
    children?: React.ReactNode
    settings: SwiperProps
}

const SwipperCoponents: FunctionComponent<Children> = ({ settings, children }) => {
  return (

        <Swiper modules={[Pagination, Autoplay]} {... settings}>{children}</Swiper>

  )
}

export default SwipperCoponents
