import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

function App() {
  return (
    <div>
       <header>
        <nav className='window'>
          <div>
              <a href='/'>CatHotel.com</a>
          </div>
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/bay' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
