import React, { useContext, useEffect } from 'react'
import CustomButom from '../../components/custom-butom/custom-butom.componensts'
import CustomInput from '../../components/custom-input/custom-input.components'
import HeaderComponents from '../../components/header/header.components'
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from './sign-up.styled'
import { MdFastfood } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import validator from 'validator'
import InputErroMessage from '../../components/input-error-message/input-error-message'
import { auth, db } from '../../config/firebase.config'
import { addDoc, collection } from '@firebase/firestore'
import { AuthError, AuthErrorCodes, createUserWithEmailAndPassword } from '@firebase/auth'
import SliderComponents from '../../components/slider/slider/slider.components'
import { useNavigate } from 'react-router'
import { UserContext } from '../../contexts/user.contexts'

interface SignUpForm {
    name: string
    email: string
    address: string
    house: string
    lastName: string
    phone: string
    password: string
    passwordConfirmation: string
}

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit, watch, setError } = useForm<SignUpForm>()

  const handleSubmitPress = async (data: SignUpForm) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)

      console.log(userCredentials)
      await addDoc(collection(db, 'users  '), {
        id: userCredentials.user.uid,
        name: data.name,
        house: data.house,
        // lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        email: userCredentials.user.email

      })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError('email', { type: 'alreadyInUse' })
      }
    }
  }
  const watchPassword = watch('password')
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(UserContext)

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])
  console.log(errors)

  return (
    <>
    <SliderComponents/>
    <HeaderComponents/>
    <SignUpContainer>
        <SignUpContent>
        <SignUpHeadline>Faça seu Cadastro</SignUpHeadline>
            <SignUpInputContainer>
                <p>Nome completo</p>
               <CustomInput hasError={!!errors?.name}
               placeholder='Digite seu nome *' {...register('name', { required: true })}/>
               {errors?.name?.type === 'required' && (
                <InputErroMessage>O nome é obrigatório</InputErroMessage>
               )}

            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Email</p>
               <CustomInput hasError={!!errors?.email}
               placeholder='Digite seu Email *' {...register('email', {
                 required: true,
                 validate: (value) => {
                   return validator.isEmail(value)
                 }
               })}/>
            {errors?.email?.type === 'required' && (
                <InputErroMessage>O email é obrigatório</InputErroMessage>
            )}

            {errors?.email?.type === 'alreadyInUse' && (
                <InputErroMessage>Esse Email já existe</InputErroMessage>
            )}

                {errors?.email?.type === 'validate' && (
                <InputErroMessage>O email não é valido</InputErroMessage>
                )}
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Endereço</p>
               <CustomInput hasError={!!errors?.address}
               placeholder='Digite seu endereço *'{...register('address',
                 { required: true })}/>
               {errors?.address?.type === 'required' && (
              <InputErroMessage>O endereço é obrigatório</InputErroMessage>
               )}
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Numero da casa</p>
               <CustomInput hasError={!!errors?.house}
                placeholder='Digite o numero da residência *' {...register('house',
                  { required: true })}/>
                 {errors?.house?.type === 'required' && (
              <InputErroMessage>O numero da residência e obrigatório</InputErroMessage>
                 )}
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Referência</p>
               <CustomInput
               placeholder='Digite a referência da sua casa' />
            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Numero do telefone</p>
               <CustomInput hasError={!!errors?.phone}
                placeholder='Digite o numero do telefone (ddd) *' {...register('phone',
                  { required: true })}/>
                 {errors?.phone?.type === 'required' && (
              <InputErroMessage>O numero do telefone é obrigatorio</InputErroMessage>
                 )}
            </SignUpInputContainer>
            <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput hasError={!!errors?.password}
            placeholder='Digite sua Senha' type='password' {...register('password',
              { required: true, minLength: 6 })}/>

            {errors?.password?.type === 'required' && (
                <InputErroMessage>A senha é obrigatória</InputErroMessage>
            )}
            {errors?.password?.type === 'minLength' && (
                <InputErroMessage>A senha precisa ter masi de 6 caracteres</InputErroMessage>
            )}

            </SignUpInputContainer>
            <SignUpInputContainer>
                <p>Confirme sua senha</p>
            <CustomInput hasError={!!errors?.passwordConfirmation}
              placeholder='Confirme sua Senha' type='password' {...register('passwordConfirmation',
                {
                  required: true,
                  minLength: 6,
                  validate: (value) => {
                    return value === watchPassword
                  }
                })} />
             {errors?.passwordConfirmation?.type === 'required' && (
                <InputErroMessage>Confirme sua Senha obrigatório</InputErroMessage>
             )}
             {errors?.passwordConfirmation?.type === 'validate' && (
                <InputErroMessage>As senhas estão diferentes</InputErroMessage>
             )}
             {errors?.passwordConfirmation?.type === 'minLength' && (
                <InputErroMessage>A senha precisa ter masi de 6 caracteres</InputErroMessage>
             )}
            </SignUpInputContainer>
                <CustomButom startIcon={<MdFastfood size={20}/>}
                onClick={() => handleSubmit(handleSubmitPress)()}>Cadastrar</CustomButom>
        </SignUpContent>
    </SignUpContainer>
    </>
  )
}

export default SignUp
