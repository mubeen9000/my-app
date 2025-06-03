import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import { Contextstore } from './Components/Contextapi';
import ContextProvider from './Components/Contextapi';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Topselling from './Components/Topselling';
import Brand from './Components/Brand';
import Dressstyle from './Components/Dressstyle';
import Happycuto from './Components/Happycuto';
import Footer from './Components/Footer';
import Foot from './Components/Foot';
import Shoppage from './Components/Shoppage';
import Cartproduct from './Components/Cartproduct';
import Login from './Components/Login';
import Casual from './Components/Casual';

const Home = () => (
  <>
  <Navbar/>
    <Hero />
    <Topselling />
    <Brand />
    <Dressstyle />
    <Happycuto />
    <Footer />
    <Foot/>

   
  </>
);

const App = () => {
  return (
    <ContextProvider>
      
      <Router>
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/shoppage/:id" element={<Shoppage />} />
            <Route path="/cart" element={<Cartproduct />} />
              <Route path="/Login" element={<Login />} />
            <Route path="/category/:name" element={<Casual />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
