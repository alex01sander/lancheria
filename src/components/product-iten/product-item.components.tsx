import { FunctionComponent, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Product from '../../types/product.types'
import CustomButom from '../custom-butom/custom-butom.componensts'
import { ProductContainer, ProductImage, ProductInfo } from './product-item.styled'

interface ProductItemProps{
    product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }
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
            <CustomButom startIcon={undefined} onClick={handleAddToCartClick }>Adicionar ao Carrinho</CustomButom>
        </ProductContainer>
  )
}

export default ProductItem
