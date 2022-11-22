import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
