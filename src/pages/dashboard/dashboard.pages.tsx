import { addDoc, collection } from '@firebase/firestore'
import { useForm } from 'react-hook-form'
import { MdFastfood } from 'react-icons/md'
import CustomButom from '../../components/custom-butom/custom-butom.componensts'
import CustomInput from '../../components/custom-input/custom-input.components'
import { db } from '../../config/firebase.config'
import { SignUpContent, SignUpInputContainer } from './dashboard.styled'

interface dashProps{
    id: string
    imageUrl: string
    name: string
    price: number
    info: string
}

const DashboardPages = () => {
  const { handleSubmit, register } = useForm<dashProps>()

  const hanldeDash = async (data : dashProps) => {
    try {
      await addDoc(collection(db, 'categories'), {
        id: data.id,
        imageUrl: data.imageUrl,
        name: data.name,
        price: data.price,
        info: data.info

      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
          <>
            <SignUpContent>
                <SignUpInputContainer>
                <p>Url da imagem</p>
               <CustomInput placeholder='Digite a Url da imagem'
               {...register('imageUrl', { required: true })} />
                </SignUpInputContainer>
                <SignUpInputContainer>
                <p>Nome do produto</p>
               <CustomInput placeholder='Digite o Nome do produto'
               {...register('name', { required: true })} />
                </SignUpInputContainer>
                <SignUpInputContainer>
                <p>Preço do produto</p>
               <CustomInput placeholder='Digite o Preço do produto'
               {...register('price', { required: true })} />
                </SignUpInputContainer>

                <CustomButom startIcon={<MdFastfood size={20}/>}
                onClick={() => handleSubmit(hanldeDash)()}>Cadastrar</CustomButom>
            </SignUpContent>
          </>
  )
}

export default DashboardPages
