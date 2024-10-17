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
import AllProjects from './Pages/ProjectsParts/AllProjects';
import FrontendPro from './Pages/ProjectsParts/FrontendPro';
import BackendPro from './Pages/ProjectsParts/BackendPro';


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
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/projects' element={<Projects />} >
          <Route  path='all' element={<AllProjects/>}/> 
          <Route  path='frontend' element={<FrontendPro/>}/> 
          <Route  path='backend' element={<BackendPro/>}/> 
        </Route> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App