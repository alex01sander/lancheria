import styled from 'styled-components'
import Colors from '../../themes/themes'

export const HeaderContainer = styled.div`
    width: 100%;
    background-color: ${Colors.background.dark};
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

export const HeaderTile = styled.div`
    font-weight: bold;
    /* font-size: 1.5rem; */
    margin-left:15px;
    &:hover{
        cursor: pointer;
    }

    @media  (max-width:768px){
        margin-bottom: 18px;
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
