import React, { createContext, FunctionComponent, useMemo, useState } from 'react'
import CartProduct from '../types/cart.types'
import Product from '../types/product.types'

interface children{
    children: React.ReactNode
}

interface ICartContext {
    isVisible: boolean;
    productsTotalPrice: number;
    productCount: number
    products: CartProduct[];
    toggleCart: () => void;
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productId: string) => void;
    increaseProductQuantity: (productId: string) => void;
    descreaseProductQuantity: (productId: string) => void;

}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  productsTotalPrice: 0,
  productCount: 0,
  products: [],
  toggleCart: () => {},
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  increaseProductQuantity: () => {},
  descreaseProductQuantity: () => {}

})

const CartContextProvider: FunctionComponent<children> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const productsTotalPrice = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * currentProduct.quantity
    }, 0)
  }, [products])

  const productCount = useMemo(() => {
    return products.reduce((acc, currentProduct) => {
      return acc + currentProduct.quantity
    }, 0)
  }, [products])

  const toggleCart = () => {
    setIsVisible(prevState => !prevState)
  }

  const addProductToCart = (product: Product) => {
    const productIsAlreadyInCart = products.some((item) => item.id === product.id)

    if (productIsAlreadyInCart) {
      return setProducts((prevState) => prevState.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    setProducts((prevState) => [...prevState, { ...product, quantity: 1 }])
  }

  const removeProductFromCart = (productId: string) => {
    setProducts((products) => products.filter((product) => product.id !== productId))
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts(products => products.map((product) => product.id === productId
      ? { ...product, quantity: product.quantity + 1 }
      : product))
  }

  const descreaseProductQuantity = (productId: string) => {
    setProducts(products => products.map((product) => product.id === productId
      ? { ...product, quantity: product.quantity - 1 }
      : product).filter((product) => product.quantity > 0))
  }

  return (
        <CartContext.Provider value={{ isVisible, products, productsTotalPrice, productCount, toggleCart, addProductToCart, removeProductFromCart, increaseProductQuantity, descreaseProductQuantity }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider
