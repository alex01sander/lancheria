import { ButtonHTMLAttributes, FunctionComponent } from 'react'
import { CustomButtonContainer, IconContainer } from './custom-button.styled'

interface Children extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: any
    // eslint-disable-next-line no-undef
    startIcon?: React.ReactNode
}

const CustomButton: FunctionComponent<Children> = ({ children, startIcon, ...rest }) => {
  return (
    <>
        <CustomButtonContainer {...rest}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
            {children}</CustomButtonContainer>
    </>
  )
}

export default CustomButton
