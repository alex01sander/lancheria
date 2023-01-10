import { onAuthStateChanged } from '@firebase/auth'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { FunctionComponent, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { auth, db } from './config/firebase.config'
import { UserContext } from './contexts/user.contexts'
import HomePages from './pages/home/home.pages'
import LoginPages from './pages/login/login.pages'
import SignUp from './pages/sign-up/sign-up.pages'

const App: FunctionComponent = () => {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext)

  onAuthStateChanged(auth, async (user) => {
    // se o usuario estiver logado no contexto, e o ususario do firebase (sign out)
    // devemos limper o contexto

    const isSigningOut = isAuthenticated && !user
    if (isSigningOut) {
      return logoutUser()
    }

    // se o usuario for  nulo no contexto, e não for nulo no firebase
    // devemos fezer login
    const isSigninIn = !isAuthenticated && user
    if (isSigninIn) {
      const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', 'user.uid')))

      const userFromFirestore = querySnapshot.docs[0]?.data()
      return loginUser(userFromFirestore as any)
    }
  })

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePages/>}/>
          <Route path='/login' element={<LoginPages/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
