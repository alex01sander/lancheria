import React from 'react'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer } from './login.pages.styled'

const LoginPages = () => {
  return (
    <>
    <HeaderComponents/>
    <LoginContainer>
        <LoginContent>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>

        <LoginInputContainer>email </LoginInputContainer>
        <LoginInputContainer>senha </LoginInputContainer>
        </LoginContent>

    </LoginContainer>
    </>
  )
}

export default LoginPages
