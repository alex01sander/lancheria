import { useEffect, useState } from 'react'
import Category from '../../types/categories.types'
import { CategoriesContainer, CategoriesContent } from './categories.styled'
import axios from 'axios'
import env from '../../config/env.config'

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
            {/* {categories.map(category => <CategoryItem)} */}
        </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
