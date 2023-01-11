import React, { useContext } from 'react'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styled'
import { useNavigate } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from '../../config/firebase.config'
import { UserContext } from '../../contexts/user.contexts'

const HeaderComponents = () => {
  const { isAuthenticated } = useContext(UserContext)

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
    </HeaderContainer>
    </>
  )
}

export default HeaderComponents
