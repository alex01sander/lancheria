import { FunctionComponent } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdRemoveShoppingCart } from 'react-icons/md'
import CartProduct from '../../types/cart.types'
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from './cart-item.styled'

interface CartItemProps {
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
  return (
    <CartItemContainer>
        <CartItemImage imageUrl={product.imageUrl}/>

        <CartItemInfo>
            <p>{product.name}</p>
            <p>R${product.price}</p>

            <CartItemQuantity>
                <AiOutlineMinus size={20}/>
                <p>{product.quantity}</p>
                <AiOutlinePlus size={20}/>
            </CartItemQuantity>
        </CartItemInfo>
        <RemoveButton>
            <MdRemoveShoppingCart size={25}/>
        </RemoveButton>
    </CartItemContainer>
  )
}

export default CartItem
