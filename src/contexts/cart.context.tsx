import React, { createContext, FunctionComponent, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface children{
    children: React.ReactNode
}

interface ICartContext {
    isVisible: boolean;
    products: CartProduct[]
    toggleCart: () => void;
    addProductToCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {}
})

const CartContextProvider: FunctionComponent<children> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible(prevState => !prevState)
  }

  const addProductToCart = (product: Product) => {
    const productIsAlreadyInCart = products.some((item) => item.id === product.id)

    if (productIsAlreadyInCart) {
      setProducts((prevState) => prevState.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  return (
        <CartContext.Provider value={{ isVisible, products, toggleCart, addProductToCart }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider
