import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Homepage from './pages/Homepage'
import About from './component/About'
import Aboutpage from './pages/Aboutpage'
import Shoppage from './pages/Shoppage'
import Featurepage from './pages/Featurepage'
import Faqpage from './pages/Faqpage'
import Contactuspage from './pages/Contactuspage'
import Errorpage from './pages/Errorpage'
import Privacypolicy from './pages/Privacypolicy'
import TermsAndConditionsPolicy from './pages/TermsAndConditionsPolicy'
export default function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/shop' element={<Shoppage/>}/>
        <Route path='/features' element={<Featurepage/>}/>
        <Route path='/faq' element={<Faqpage/>}/>
        <Route path='/contactus' element={<Contactuspage/>}/>
        <Route path='/privacy-policy' element={<Privacypolicy/>}/>
        <Route path='/tc' element={<TermsAndConditionsPolicy/>}/>
        <Route path='*' element={<Errorpage/>}/>
      </Routes>
      </BrowserRouter>
             <Footer/>
    </div>
  )
}
