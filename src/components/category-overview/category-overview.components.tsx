import { FunctionComponent } from 'react'
import Category from '../../types/categories.types'
import ProductItem from '../product-iten/product-item.components'
import { CategoryContainer, CategoryTitle, ProductContainer } from './category-overview.styled'

interface CategoryOverviewProps{
    category: Category
}
const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({ category }) => {
  return (
        <CategoryContainer>
            <CategoryTitle>{category.displayName}</CategoryTitle>

            <ProductContainer>
              {category.products.slice(0, 4).map(product =>
                 <ProductItem key={product.id} product={product}/>)}
            </ProductContainer>
        </CategoryContainer>
  )
}

export default CategoryOverview
