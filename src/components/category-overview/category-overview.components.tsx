import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'
import ProductItem from '../product-iten/product-item.components'
import { CategoryContainer, CategoryTitle, ProductContainer } from './category-overview.styled'
import { AiOutlineMinus } from 'react-icons/ai'

interface CategoryOverviewProps{
    category: Category
}
const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({ category }) => {
  return (
        <CategoryContainer>
            <CategoryTitle><AiOutlineMinus size={30}/><p>{category.displayName}</p></CategoryTitle>

            <ProductContainer>
              {category.products.slice(0, 3).map(product =>
                 <ProductItem key={product.id} product={product}/>)}
            </ProductContainer>
        </CategoryContainer>
  )
}

export default CategoryOverview
