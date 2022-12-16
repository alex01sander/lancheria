import { collection, getDocs } from '@firebase/firestore'
import { Dispatch } from 'redux'
import { db } from '../../../config/firebase.config'
import SlidersProps from '../../../types/sliders.types'
import SliderActionTypes from './slider-action-types'

export const fetchSlider = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SliderActionTypes.FETCH_SLIDER_SUCESS })

    try {
      const sliderFromFirestore: SlidersProps[] = []

      const querySnapshot = await getDocs(collection(db, 'Slider'))

      querySnapshot.forEach((doc) => {
        sliderFromFirestore.push(doc.data() as any)
      })

      dispatch({ type: SliderActionTypes.FETCH_SLIDER_SUCESS })
    } catch (error) {
      dispatch({ type: SliderActionTypes.FETCH_SLIDER_FAILURE })
    }
  }
}
