import { collection, getDocs, query, where } from '@firebase/firestore'
import { FunctionComponent, useEffect, useState } from 'react'
import { db } from '../../config/firebase.config'
import Category from '../../types/categories.types'
import Loading from '../loading/loading.components'
import { CategoryTitle, Container, IconContainer, ProductsContainer } from './category-details.styled'
import { BiChevronLeft } from 'react-icons/bi'

import ProductItem from '../product-iten/product-item.components'
import { useNavigate } from 'react-router'

interface CategoryDetailsProps{
    categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({ categoryId }) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  useEffect(() => {
    const fecthCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(query(collection(db, 'categories'),
          where('id', '==', categoryId)))

        const category = querySnapshot.docs[0]?.data()

        setCategory(category as any)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fecthCategory()
  }, [])

  if (isLoading) return <Loading/>

  return (
    <>
      <Container>

        <CategoryTitle>
        <IconContainer onClick={handleBackClick}>
          <BiChevronLeft size={36}/>
        </IconContainer>
          <p>Explorar {category?.displayName}</p>
        </CategoryTitle>

        <ProductsContainer>
          {category?.products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </Container>
    </>
  )
}

export default CategoryDetails
