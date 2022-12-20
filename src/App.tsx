import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePages from './pages/home/home.pages'
import LoginPages from './pages/login/login.pages'
import SignUp from './pages/sign-up/sign-up.pages'

function App () {
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
