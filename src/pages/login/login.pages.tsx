import CustomButom from '../../components/custom-butom/custom-butom.componensts'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer } from './login.pages.styled'
import { GiPizzaCutter } from 'react-icons/gi'

const LoginPages = () => {
  return (
    <>
    <HeaderComponents/>
    <LoginContainer>
        <LoginContent>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>

        <LoginInputContainer>email </LoginInputContainer>
        <LoginInputContainer>senha </LoginInputContainer>

        <CustomButom startIcon={<GiPizzaCutter size={25}/>}>Entrar</CustomButom>
        </LoginContent>

    </LoginContainer>
    </>
  )
}

export default LoginPages
