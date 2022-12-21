import styled from 'styled-components'

interface SliderItemContainerProps {
    backgroundImage: string
  }

export const SliderItemContainer = styled.div<SliderItemContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding:130px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${(props) => `url('${props.backgroundImage}')`};

    @media (max-width: 768px){
        padding: 0 50px 0 50px;
        height: 300px;
    }
`
