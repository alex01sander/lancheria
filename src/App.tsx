import { onAuthStateChanged } from '@firebase/auth'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { FunctionComponent, useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Loading from './components/loading/loading.components'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.contexts'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import HomePages from './pages/home/home.pages'
import LoginPages from './pages/login/login.pages'
import SignUp from './pages/sign-up/sign-up.pages'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)
  const [isInitializing, setIsInitializing] = useState(true)

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      logoutUser()

      return setIsInitializing(false)
    }

    const isSigninIn = !isAuthenticated && user
    if (isSigninIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', 'user.uid')))

      const userFromFirestore = querySnapshot.docs[0]?.data()
      loginUser(userFromFirestore as any)
      return setIsInitializing(false)
    }
    return setIsInitializing(false)
  })

  if (isInitializing) return <Loading/>
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePages/>}/>
          <Route path='/category:id' element={<CategoryDetailsPage/>}/>
          <Route path='/login' element={<LoginPages/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
