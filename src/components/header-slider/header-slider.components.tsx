import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/redux.hooks'
import { fetchSlider } from '../../store/reducers/slider/slider.action'

import HeaderComponent from '../header/header.component'
import { HeaderSliderContainer } from './header-slider.styled'

const HeaderSlider = () => {
  const { slidered } = useAppSelector(state => state.sliderReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSlider() as any)
  })

  return (
    <>
      <HeaderSliderContainer>
          {slidered.map((sliders) => (
            <div key={sliders.id}><HeaderComponent slider={sliders}/> </div>
          ))}
      </HeaderSliderContainer>
    </>
  )
}

export default HeaderSlider
