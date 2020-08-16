import React from 'react';
import { Header } from './components/header';
import { About } from './components/about';
import { Works } from './components/works';
import { Contact } from './components/contact';
import './global.css'


function App() {
  return (
    <>
    <Header />
    <About />
    <Works />
    <Contact />
    </>
  );
}

export default App;
