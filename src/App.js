import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import app from './App.css'
import HeroSection from './Components/HeroSection'
import Picup from './Components/Picup';
import Menu from './Components/Menu';
import Recomendation from './Components/Recomendation';
import Footer from './Components/Footer';
import Payment from './Components/Payment';
import ViewAll from './Components/ViewAll';
import CarDetails from './Components/CarDetails';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Picup />
            <Menu />
            <Recomendation />
            <Footer />
          </>
        } />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/car-details/:id" element={<CarDetails />} /> 
         <Route path="/viewall" element={<ViewAll />} /> 
         <Route path="/payment" element={<Payment />} /> 
      </Routes>
    </Router>
  )
}

export default App
