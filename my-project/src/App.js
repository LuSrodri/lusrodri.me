import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer';
import { Projects } from './Components/Projects';
import React, { Component }  from 'react';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
