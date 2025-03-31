import Home from './Home'
import Buy from './Buy'
import About from './About'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

function App() {
  return (
    <div>
       <header>
        <nav className='window'>
          
              <div><a href='/'>CatHotel.com</a></div>
              <div><a className='about' href='/about'>О нас</a></div>
          
        </nav>
      </header>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
