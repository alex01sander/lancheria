import React, { FunctionComponent, useContext, useEffect } from 'react'
import { CategoryContext } from '../../contexts/category.context'
import CategoryOverview from '../category-overview/category-overview.components'
import { Container } from './categories-overview.styled'

const CategorieOverview: FunctionComponent = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
    }
  }, [])
  return (
    <Container>
        {categories.map((category) => (
            <CategoryOverview key={category.id} category={category}/>
        ))}

    </Container>
  )
}

export default CategorieOverview
