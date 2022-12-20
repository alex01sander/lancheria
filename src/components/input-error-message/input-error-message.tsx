import React, { FunctionComponent } from 'react'
import { InputErrorMessageContainer } from './input-error-message.styled'

interface ErroMesasgeProps{
    children?: React.ReactNode
}

const InputErroMessage: FunctionComponent<ErroMesasgeProps> = ({ children }) => {
  return (
    <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
  )
}

export default InputErroMessage
