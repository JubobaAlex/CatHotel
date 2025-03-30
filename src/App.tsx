import Home from './Home'
import Buy from './Buy'
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
          <Route path='/buy' element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
