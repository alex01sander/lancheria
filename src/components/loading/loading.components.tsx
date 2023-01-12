import { FunctionComponent } from 'react'
import MoonLoader from 'react-spinners/MoonLoader'
import { LoadingContainer } from './loading.styled'

const Loading: FunctionComponent = () => {
  return (
         <LoadingContainer>
            <MoonLoader size={30}/>
         </LoadingContainer>
  )
}

export default Loading
