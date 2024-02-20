import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js';
import About from './Components/About.js';
import Skills from './Components/Skills.js';
import Contact from './Components/Contact.js';
import Signup from './Components/Signup.js';

const App = () => {
  return (
    <Router>
    <Navbar/>

    <Routes>

   
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/signup' element={<Signup />} />
    </Routes>
    </Router>
      
    
  )
}

export default App

