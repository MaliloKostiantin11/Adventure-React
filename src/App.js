import React from 'react';
import { BrowserRouter as Router, Await, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home'
import './components/HeroSection'
import Services from './components/pages/Services';
import Products from './components/pages/Product';
import SignUp from './components/pages/SignUp';

function App() {
  return (
   <>
   <Router>
     <Navbar />
      <Await>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' exact Component={Services}/>
          <Route path='/products' exact Component={Products}/>
          <Route path='/sign-up' exact Component={SignUp}/>
        </Routes>
      </Await>
   </Router>
   
   </>
  );
}

export default App;
