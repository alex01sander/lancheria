import React, { useContext } from 'react'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styled'
import { useNavigate } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../contexts/user.contexts'
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context'

const HeaderComponents = () => {
  const { isAuthenticated } = useContext(UserContext)
  const { toggleCart } = useContext(CartContext)

  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/login')
  }

  const handleClickHome = () => {
    navigate('/')
  }

  return (
    <>
    <HeaderContainer>
        <HeaderItem>
            <HeaderItems onClick={handleClickHome}>Home</HeaderItems>
            <HeaderItems>Xis</HeaderItems>
            <HeaderItems>Hambuerguer</HeaderItems>
            <HeaderItems>Pizza</HeaderItems>
            <HeaderItems>Bebidas</HeaderItems>
        </HeaderItem>
        {!isAuthenticated && (
          <HeaderTile onClick={handleClickLogin}>Entrar ou Cadastrar</HeaderTile>
        )}
        {isAuthenticated && (
        <HeaderTile onClick={() => signOut(auth)}>Sair</HeaderTile>
        )}

        <HeaderItems onClick={toggleCart}>
        <BsCart3 size={25} style={{ marginLeft: 20 }}/>
        <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItems>

    </HeaderContainer>
    </>
  )
}

export default HeaderComponents
