import { getDocs, collection } from '@firebase/firestore'
import React, { createContext, FunctionComponent, useState } from 'react'
import { db } from '../config/firebase.config'
import Category from '../types/categories.types'

interface ChildrenProps{
    children: React.ReactNode
}
interface ICategoryContext{
    categories: Category[]
    fetchCategories: () => Promise<void>
    isLoading: boolean
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  isLoading: false

})

const CategoryContextProvider: FunctionComponent<ChildrenProps> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(collection(db, 'categories'))

      querySnapshot.forEach((doc: any) => {
        categoriesFromFirestore.push(doc.data())
      })

      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider value={{ categories, isLoading, fetchCategories }}>
        {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
