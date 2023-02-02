import styled from 'styled-components'
import Colors from '../../themes/themes'

interface CartContainerProps{
    isVisible: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
    position: fixed;
    height:100vh;
    width:100vw;
    right:0;
    left:0;
    top:0;
    bottom:0;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content:center;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    transition: all 0.3s ease;

    p {
        color: ${Colors.text.dark};
    }
`

export const CartEscapeArea = styled.div`
    width:100%;
`
export const CartContent = styled.div` 
    height: 100%;
    width:50%;
    min-height: 500px;
    z-index:200;
    background-color:white;
    padding:20px;
    overflow-y:scroll;
`

export const CartTitle = styled.p` 
    font-size:1.325rem;
    font-weight:600;
    margin-bottom:15px;
`
export const CartTotal = styled.p`
    font-weight:600;
    font-size:1.125rem;
    margin-bottom:15px;
`
export const CartToggle = styled.p`
    display:flex;
    justify-content:flex-start;
    cursor:pointer;
    margin-bottom: 20px;

    &:hover{
        color:red;
    }
`
