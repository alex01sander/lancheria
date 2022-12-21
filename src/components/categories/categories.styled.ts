import styled from 'styled-components'

export const CategoriesContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CategoriesContent = styled.div`
    width: 500px;
    height:280px;
    display: flex;
    justify-content:center;
    padding: 30px;
    gap:10px;

    /* & div :nth-child(1) 
    & div:nth-child(2) 
    & div:nth-child(3) 
    & div:nth-child(4) 
    & div:nth-child(5) */

    /* @media (max-width: 768px){
      display: flex;
      flex-direction: column;
      & div :nth-child(1) {grid-area: a;}
      & div:nth-child(2) {grid-area: b;}
      & div:nth-child(3) {grid-area: c;}
      & div:nth-child(4) {grid-area: d;}
      & div:nth-child(5) {grid-area: e;}    
    } */
`
