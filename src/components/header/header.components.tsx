import React from 'react'
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTile } from './header.styled'

const HeaderComponents = () => {
  return (
    <HeaderContainer>
        <HeaderItem>
            <HeaderItems>Home</HeaderItems>
            <HeaderItems>Xis</HeaderItems>
            <HeaderItems>Hambuerguer</HeaderItems>
            <HeaderItems>Pizza</HeaderItems>
            <HeaderItems>Bebidas</HeaderItems>
        </HeaderItem>
        <HeaderTile>Login/SignIn</HeaderTile>
    </HeaderContainer>
  )
}

export default HeaderComponents
