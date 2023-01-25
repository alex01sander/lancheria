import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router'
import CategoryDetails from '../../components/category-details/category-details.coponents'
import HeaderComponents from '../../components/header/header.components'
import SliderComponents from '../../components/slider/slider/slider.components'

const CategoryDetailsPage:FunctionComponent = () => {
  const { id } = useParams()

  if (!id) return null

  return (

    <>
        <SliderComponents/>
        <HeaderComponents/>
        <CategoryDetails categoryId={id}/>
    </>
  )
}

export default CategoryDetailsPage
