import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'
import { CategoryItemContainer, CategoryName } from './category-item.styeled'

interface CategoryItemProps {
    category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
        <CategoryName>
            {category.displayName}
        </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
