// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header';
import Skills from './Pages/Skills';



// Styles 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
      <Routes>
        <Route index path='/' element={<Home />} /> 
        <Route  path='/home' element={<Home />} /> 
        <Route path='/skills' element={<Skills />} /> 
        <Route path='/services' element={<Services />} /> 
        <Route path='/projects' element={<Projects />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App