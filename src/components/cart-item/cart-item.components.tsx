import { FunctionComponent, useContext } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { CartContext } from '../../contexts/cart.context'
import CartProduct from '../../types/cart.types'
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from './cart-item.styled'

interface CartItemProps {
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  const { removeProductFromCart, increaseProductQuantity, descreaseProductQuantity } = useContext(CartContext)

  const handleRemoveCartClick = () => {
    removeProductFromCart(product.id)
  }

  const handleDescreaseProductQuantity = () => {
    descreaseProductQuantity(product.id)
  }

  const handleIncreaseProductQuantity = () => {
    increaseProductQuantity(product.id)
  }

  return (
    <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl}/>

        <CartItemInfo>
            <p>{product.name}</p>
            <p>R${product.price}</p>

            <CartItemQuantity>
                <AiOutlineMinus size={20} onClick={handleDescreaseProductQuantity}/>
                <p>{product.quantity}</p>
                <AiOutlinePlus size={20} onClick={handleIncreaseProductQuantity}/>
            </CartItemQuantity>
        </CartItemInfo>
        <RemoveButton onClick={handleRemoveCartClick}>
            <MdRemoveShoppingCart size={25}/>
        </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
