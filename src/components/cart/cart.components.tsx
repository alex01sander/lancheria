import { FunctionComponent, useContext } from 'react'
import CustomButom from '../custom-butom/custom-butom.componensts'
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartToggle, CartTotal } from './cart.styles'
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../cart-item/cart-item.components'
import { useNavigate } from 'react-router'
import { TbShoppingCartPlus } from 'react-icons/tb'

const Cart: FunctionComponent = () => {
  const { isVisible, products, toggleCart, productsTotalPrice, productCount } = useContext(CartContext)

  const navigate = useNavigate()

  const handleBuyCartClick = () => {
    navigate('/')
    toggleCart()
  }
  return (
    <CartContainer isVisible={isVisible}>
        <CartContent>
      <CartToggle onClick={toggleCart}>X</CartToggle>
            <CartEscapeArea onClick={toggleCart}/>
            <CartTitle>Seu Carrinho</CartTitle>

            {/* Produtos */}
            {products.map(product => <CartItem product={product} key={product.id}/>)}

            {productCount > 0 && (
            <CartTotal>R$ {productsTotalPrice}</CartTotal>

            )}

            {productCount > 0 && (
            <CustomButom startIcon={<BsCartCheck/>}>Ir para o Checkout</CustomButom>
            )}

            {productCount === 0 && (
              <p>Seu Carrinho está vazio</p>
            )}

            {productCount === 0 && (
              <CustomButom
              onClick={handleBuyCartClick}
              startIcon={<TbShoppingCartPlus size={20}/>}
              style={{ marginTop: 20 }}>Adicionar ao Carrinho</CustomButom>
            )}

        </CartContent>
    </CartContainer>
  )
}

export default Cart
