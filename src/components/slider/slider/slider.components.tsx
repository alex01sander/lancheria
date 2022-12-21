import { collection, getDocs } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../config/firebase.config'
import Slidered from '../../../types/slider.types'
import SliderItem from '../slider-item/slider-item.components'
import { SliderContainer } from './slider.styled'

const SliderComponents = () => {
  const [slider, setSlider] = useState<Slidered[]>([])

  const fetchSlider = async () => {
    try {
      const sliderFromFirestore: Slidered[] = []
      const querySnapshot = await getDocs(collection(db, 'slider'))

      querySnapshot.forEach((doc: any) => {
        sliderFromFirestore.push(doc.data())
      })

      setSlider(sliderFromFirestore)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(slider)

  useEffect(() => {
    fetchSlider()
  }, [])

  return (

    <SliderContainer>
         {slider.map((images) =>
           <div key={images.id}>
              <SliderItem slider={images}/>
           </div>)}
    </SliderContainer>

  )
}

export default SliderComponents
