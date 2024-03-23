import './App.css';
import React from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action,ComedyMovies,HorrorMovies} from './url'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall />
    </div>
  );
}

export default App;
