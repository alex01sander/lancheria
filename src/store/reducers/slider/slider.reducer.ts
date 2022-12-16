import SlidersProps from '../../../types/sliders.types'
import SliderActionTypes from './slider-action-types'

interface InitialState {
    slidered: SlidersProps[]
}

const initialState : InitialState = {
  slidered: []
}

const sliderReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case SliderActionTypes.FETCH_SLIDER_START:
      return { ...state }
    case SliderActionTypes.FETCH_SLIDER_SUCESS:
      return { ...state, slidered: action.payload }
    case SliderActionTypes.FETCH_SLIDER_FAILURE:
      return { ...state }
    default:
      return state
  }
}

export default sliderReducer
