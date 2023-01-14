import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'
import { CategoryContainer, CategoryTitle, ProductContainer } from './category-overview.styled'

interface CategoryOverviewProps{
    category: Category
}
const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({ category }) => {
  return (
        <CategoryContainer>
            <CategoryTitle>{category.displayName}</CategoryTitle>

            <ProductContainer></ProductContainer>
        </CategoryContainer>
  )
}

export default CategoryOverview
