import { FunctionComponent } from 'react'
import Slidered from '../../../types/slider.types'
import { SliderItemContainer } from './slider-item.styled'

interface SliderProps{
  slider: Slidered
}

const SliderItem: FunctionComponent<SliderProps> = ({ slider }) => {
  return (

    <SliderItemContainer backgroundImage={slider.imageUrl}/>
  )
}

export default SliderItem
