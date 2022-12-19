import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePages from './pages/home/home.pages'
import LoginPages from './pages/login/login.pages'

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePages/>}/>
          <Route path='/login' element={<LoginPages/>}/>

        </Routes>
      </BrowserRouter>

  )
}

export default App
