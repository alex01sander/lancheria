import styled from 'styled-components'

interface ProductImageProps {
    imageUrl: string
}

export const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    background-color:black;
    width:400px;
    padding:10px;
    margin:0;
    
    border-radius: 10px;

`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin-top: 5px;
    margin-bottom:5px;
    padding:5px;
    color:white;

    p{
        font-size: 1rem;
        font-weight: 500;
        max-width:300px;
        margin-top:10px;
    }
`

export const ProductImage = styled.div<ProductImageProps>`
    background-image: ${(props) => `url('${props.imageUrl}')`};
    height: 280px;
    width: 350px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border: solid white 1px;
`
