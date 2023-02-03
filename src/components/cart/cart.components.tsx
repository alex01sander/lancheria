import { FunctionComponent, useContext } from 'react'
import CustomButom from '../custom-butom/custom-butom.componensts'
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartToggle, CartTotal } from './cart.styles'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.components'

const Cart: FunctionComponent = () => {
  const { isVisible, products, toggleCart } = useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
        <CartContent>
      <CartToggle onClick={toggleCart}>X</CartToggle>
            <CartEscapeArea onClick={toggleCart}/>
            <CartTitle>Seu Carrinho</CartTitle>

            {/* Produtos */}
            {products.map(product => <CartItem product={product} key={product.id}/>)}
            <CartTotal>R$ 12,00</CartTotal>
            <CustomButom startIcon={<BsCartCheck/>}>Ir para o Checkout</CustomButom>

        </CartContent>
    </CartContainer>
  )
}

export default Cart
