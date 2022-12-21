import { useEffect, useState } from 'react'
import Category from '../../types/categories.types'
import { CategoriesContainer, CategoriesContent } from './categories.styled'
import CategoryItem from '../category-item/category-item.components'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../../config/firebase.config'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories'))

      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    }
  }

  console.log(categories)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
        <CategoriesContent>
            {categories.map((category) =>
           <div key={category.id}>
              <CategoryItem category={category}/>
           </div>)}
        </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
