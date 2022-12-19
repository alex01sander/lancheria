import CustomButom from '../../components/custom-butom/custom-butom.componensts'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './login.pages.styled'
import { GiPizzaCutter, GiPizzaSlice } from 'react-icons/gi'
import CustomInput from '../../components/custom-input/custom-input.components'

const LoginPages = () => {
  return (
    <>
    <HeaderComponents/>
    <LoginContainer>
        <LoginContent>
        <LoginHeadline>Cadastre-se</LoginHeadline>
        <CustomButom startIcon={<GiPizzaSlice size={25}/>}>Cadastrar</CustomButom>
            <LoginSubtitle>Ou Entre com a sua conta</LoginSubtitle>
        <LoginInputContainer>
            <CustomInput placeholder='Digite seu E-mail' hasError={true}/>
        </LoginInputContainer>
        <LoginInputContainer>
            <CustomInput placeholder='Digite sua Senha' hasError={true}/>
        </LoginInputContainer>

        <CustomButom startIcon={<GiPizzaCutter size={25}/>}>Entrar</CustomButom>
        </LoginContent>

    </LoginContainer>
    </>
  )
}

export default LoginPages
