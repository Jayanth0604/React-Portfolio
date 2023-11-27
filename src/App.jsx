import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import './App.css';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience'
import Contact from './Components/Contact';
import Service from './Components/Service';
import ScrollToTop from 'react-scroll-to-top';

function App() {
  return (
    <div className='App'>
      <ScrollToTop smooth color='#0D82A1' text='make an appoinment'></ScrollToTop>
      <Router>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />}/>
          <Route path='/Expertise' element={<Service />}/>
          <Route path='/Experience' element={<Experience />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
