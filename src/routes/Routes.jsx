
import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Switch>
    </Router>
  );
}

export default Routes