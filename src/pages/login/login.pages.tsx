import CustomButom from '../../components/custom-butom/custom-butom.componensts'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './login.pages.styled'
import { GiPizzaCutter, GiPizzaSlice } from 'react-icons/gi'
import CustomInput from '../../components/custom-input/custom-input.components'
import { useForm } from 'react-hook-form'

const LoginPages = () => {
  const { register, formState: { errors }, handleSubmit } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log(data)
  }

  console.log(errors)

  return (
    <>
    <HeaderComponents/>
    <LoginContainer>
        <LoginContent>
        <LoginHeadline>Cadastre-se</LoginHeadline>
        <CustomButom startIcon={<GiPizzaSlice size={25}/>}>Cadastrar</CustomButom>
            <LoginSubtitle>Ou Entre com a sua conta</LoginSubtitle>
        <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput hasError={!!errors?.email}
            placeholder='Digite seu E-mail' {...register('email',
              { required: true })}/>
        </LoginInputContainer>
        <LoginInputContainer>
            <p>Senha</p>
            <CustomInput hasError={!!errors?.password}
            placeholder='Digite sua Senha' {...register('password',
              { required: true })}/>
        </LoginInputContainer>

        <CustomButom startIcon={<GiPizzaCutter size={25}/>}
         onClick={() => handleSubmit(handleSubmitPress)()}>Entrar</CustomButom>
        </LoginContent>

    </LoginContainer>
    </>
  )
}

export default LoginPages
