import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Homepage from './pages/Homepage'
import About from './component/About'

export default function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
             <Footer/>
    </div>
  )
}
