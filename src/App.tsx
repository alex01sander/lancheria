import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderComponent from './components/header/header.component'

function App () {
  return (
    <div className="App">
      <HeaderComponent/>
      <BrowserRouter>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
