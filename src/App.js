import './App.css';
import React from 'react';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { EditFrom } from './components/EditFrom';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <EditFrom/>
    </React.Fragment>
  );
}

export default App;
