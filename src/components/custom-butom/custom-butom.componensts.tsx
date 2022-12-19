import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from './custom-butom.styled'

interface CustomButomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    startIcon: React.ReactNode
}

const CustomButom: FunctionComponent<CustomButomProps> = ({ children, startIcon, ...rest }) => {
  return (
    <CustomButtonContainer {...rest}>
    {startIcon && <IconContainer>{startIcon}</IconContainer>}
    {children}</CustomButtonContainer>
  )
}

export default CustomButom
