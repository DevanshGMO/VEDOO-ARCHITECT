import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AnnouncementBar from './Components/AnnouncementBar'
import Navbar from './Components/Navbar'
import Aboutus from './Pages/Aboutus'
import HowItWorks from './Pages/HowItWorks'
import Portfolio from './Pages/Portfolio'
import Contactus from './Pages/Contactus'
import Moodboard from './Pages/Moodboard'
import Login from './Pages/Login'
import Signup from './Components/Signup'
import Footer from './Components/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <AnnouncementBar/>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Moodboard" element={<Moodboard />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>    
  )
}

export default App