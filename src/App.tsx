import { onAuthStateChanged } from '@firebase/auth'
import { FunctionComponent } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { auth } from './config/firebase.config'
import HomePages from './pages/home/home.pages'
import LoginPages from './pages/login/login.pages'
import SignUp from './pages/sign-up/sign-up.pages'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
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
