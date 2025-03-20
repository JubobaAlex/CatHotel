import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
