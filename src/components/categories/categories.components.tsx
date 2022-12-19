import { useEffect, useState } from 'react'
import Category from '../../types/categories.types'
import { CategoriesContainer, CategoriesContent } from './categories.styled'
import axios from 'axios'
import env from '../../config/env.config'
import CategoryItem from '../category-item/category-item.components'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  console.log(categories)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
        <CategoriesContent>
            {categories.map((category) =>
           <div key={category.id}>
              <CategoryItem category={category}/>
           </div>)}
        </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories