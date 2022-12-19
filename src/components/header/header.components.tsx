import React from 'react'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styled'
import { useNavigate } from 'react-router-dom'

const HeaderComponents = () => {
  const navigate = useNavigate()

  const handleClickLogin = () => {
    navigate('/login')
  }

  return (
    <HeaderContainer>
        <HeaderItem>
            <HeaderItems>Home</HeaderItems>
            <HeaderItems>Xis</HeaderItems>
            <HeaderItems>Hambuerguer</HeaderItems>
            <HeaderItems>Pizza</HeaderItems>
            <HeaderItems>Bebidas</HeaderItems>
        </HeaderItem>
        <HeaderTile onClick={handleClickLogin}>Login/SignIn</HeaderTile>
    </HeaderContainer>
  )
}

export default HeaderComponents
