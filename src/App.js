import React from 'react';
import './App.css';
import Posters from './Posters';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <Posters />
    </div>
  );
}

export default App;
