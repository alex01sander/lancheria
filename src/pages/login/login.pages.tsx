import CustomButom from '../../components/custom-butom/custom-butom.componensts'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './login.pages.styled'
import { GiPizzaCutter, GiPizzaSlice } from 'react-icons/gi'
import CustomInput from '../../components/custom-input/custom-input.components'
import { useForm } from 'react-hook-form'
import InputErroMessage from '../../components/input-error-message/input-error-message'
import validator from 'validator'
import { useNavigate } from 'react-router'

interface loginProps{
  email: string
  password: string
}

const LoginPages = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<loginProps>()
  const navigate = useNavigate()

  const handleSubmitPress = (data: any) => {
    console.log(data)
  }

  const handleClickSignIn = () => {
    navigate('/signUp')
  }

  console.log(errors)

  return (
    <>
    <HeaderComponents/>
    <LoginContainer>
        <LoginContent>
        <LoginHeadline>Cadastre-se</LoginHeadline>
        <CustomButom startIcon={<GiPizzaSlice size={25}/>}onClick={handleClickSignIn}>Cadastrar</CustomButom>
            <LoginSubtitle>Ou Entre com a sua conta</LoginSubtitle>
        <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput hasError={!!errors?.email}
            placeholder='Digite seu E-mail' {...register('email',
              {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}/>

            {errors?.email?.type === 'required' && (
                <InputErroMessage>O email é obrigatório</InputErroMessage>
            )}

            {errors?.email?.type === 'validate' && (
                <InputErroMessage>O email não é valido</InputErroMessage>
            )}
        </LoginInputContainer>
        <LoginInputContainer>
            <p>Senha</p>
            <CustomInput hasError={!!errors?.password}
            placeholder='Digite sua Senha' {...register('password',
              { required: true })}/>

            {errors?.password?.type === 'required' && (
                <InputErroMessage>A senha é obrigatória</InputErroMessage>
            )}
        </LoginInputContainer>

        <CustomButom startIcon={<GiPizzaCutter size={25}/>}
         onClick={() => handleSubmit(handleSubmitPress)()}>Entrar</CustomButom>
        </LoginContent>

    </LoginContainer>
    </>
  )
}

export default LoginPages
