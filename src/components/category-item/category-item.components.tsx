import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router'
import Category from '../../types/categories.types'
import { CategoryItemContainer, CategoryName } from './category-item.styeled'

interface CategoryItemProps {
    category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }

  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
        <CategoryName onClick={handleExploreClick}>
            {category.displayName}
        </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
