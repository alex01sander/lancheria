import { FunctionComponent } from 'react'
import Product from '../../types/product.types'
import CustomButom from '../custom-butom/custom-butom.componensts'
import { ProductContainer, ProductImage, ProductInfo } from './product-item.styled'

interface ProductItemProps{
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
        <ProductContainer>
            <ProductInfo>
            <p>{product.name}</p>
            </ProductInfo>
            <ProductImage imageUrl={product.imageUrl}/>

            <ProductInfo>
                <p>{product.info}</p>
                <p>R${product.price}</p>
            </ProductInfo>
            <CustomButom startIcon={undefined} >Adicionar ao Carrinho</CustomButom>
        </ProductContainer>
  )
}

export default ProductItem
