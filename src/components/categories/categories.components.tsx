import { useContext, useEffect } from 'react'
import { CategoriesContainer, CategoriesContent } from './categories.styled'
import CategoryItem from '../category-item/category-item.components'
import { CategoryContext } from '../../contexts/category.context'
import Loading from '../loading/loading.components'

const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
        {isLoading && <Loading/>}

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
