import React from 'react'
import CategorieOverview from '../../components/categories-overview/categories-overview.components'
import Categories from '../../components/categories/categories.components'
import HeaderComponents from '../../components/header/header.components'
import SliderComponents from '../../components/slider/slider/slider.components'

const HomePages = () => {
  return (
    <>
    <SliderComponents/>
    <HeaderComponents/>
    <Categories/>
    <CategorieOverview/>
    </>
  )
}

export default HomePages
