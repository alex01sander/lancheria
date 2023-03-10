import CustomButom from '../../components/custom-butom/custom-butom.componensts'
import HeaderComponents from '../../components/header/header.components'
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from './login.pages.styled'
import { GiPizzaCutter, GiPizzaSlice } from 'react-icons/gi'
import CustomInput from '../../components/custom-input/custom-input.components'
import { useForm } from 'react-hook-form'
import InputErroMessage from '../../components/input-error-message/input-error-message'
import validator from 'validator'
import { useNavigate } from 'react-router'
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../config/firebase.config'
import SliderComponents from '../../components/slider/slider/slider.components'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/user.contexts'
import Loading from '../../components/loading/loading.components'

interface loginProps{
  email: string
  password: string
}

const LoginPages = () => {
  const { register, formState: { errors }, handleSubmit, setError } = useForm<loginProps>()

  const { isAuthenticated } = useContext(UserContext)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSubmitPress = async (data: loginProps) => {
    try {
      setIsLoading(true)
      const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password)

      console.log(userCredentials)
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
        return setError('password', { type: 'mismatch' })
      }

      if (_error.code === AuthErrorCodes.USER_DELETED) {
        return setError('email', { type: 'notFound' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleClickSignIn = () => {
    navigate('/signUp')
  }

  console.log(errors)

  return (
    <>
    {isLoading && <Loading/>}
    <SliderComponents/>
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
                <InputErroMessage>O email ?? obrigat??rio</InputErroMessage>
            )}

            {errors?.email?.type === 'validate' && (
                <InputErroMessage>O email n??o ?? valido</InputErroMessage>
            )}
            {errors?.email?.type === 'notFound' && (
                <InputErroMessage>O email n??o foi encontrado</InputErroMessage>
            )}
        </LoginInputContainer>
        <LoginInputContainer>
            <p>Senha</p>
            <CustomInput hasError={!!errors?.password}
            placeholder='Digite sua Senha' type='password' {...register('password',
              { required: true })}/>

            {errors?.password?.type === 'required' && (
                <InputErroMessage>A senha ?? obrigat??ria</InputErroMessage>
            )}
             {errors?.password?.type === 'mismatch' && (
                <InputErroMessage>Senha Inv??lida</InputErroMessage>
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
