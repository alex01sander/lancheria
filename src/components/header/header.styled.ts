import styled from 'styled-components'
import Colors from '../../themes/themes'

interface imageProps{
    backgroundImage: string
}

export const HeaderImage = styled.div<imageProps>`
/* background-image: url(https://brabussp.hamburgueriabrabus.com.br/wp-content/uploads/2020/08/banner-min.jpg); */
background-image: ${(props) => `url('${props.backgroundImage}')`};
background-repeat: no-repeat;
    background-size:cover;
    width: 100%;
    height: 50%;
    padding: 13%;;
`

export const HeaderImageTeste1 = styled.div`
background-image: url(https://miro.medium.com/max/1024/0*lwjQoDkMGdSGHoA7.png);
background-repeat: no-repeat;
    background-size:cover;
    width: 100%;
    height: 50%;
    padding: 13%;
`
export const HeaderImageTeste2 = styled.div`
background-image: url(https://img.pikbest.com/backgrounds/20190507/gourmet-hamburger-fries-banner-background_1891751.jpg!bwr800);
background-repeat: no-repeat;
    background-size:cover;
    width: 100%;
    height: 50%;
    padding: 13%;;
`

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
    padding: 20px;
    color: ${Colors.text.white};

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 25px;

    @media (max-width: 768px){
        width: 100%;
        justify-content: space-evenly;
    }
`

export const HeaderItem = styled.div`
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    

    &:nth-child(1), 
    &:nth-child(2), 
    &:nth-child(3) {
        margin-right: 40px;
    }

    &:hover{
        cursor: pointer;
    }

    @media (max-width:768px){
        margin-right:0;
    }
`
