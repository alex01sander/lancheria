import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePages from './pages/home.pages'

function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePages/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
