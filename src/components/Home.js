import React from 'react'
import Pokemon from './Pokemon';
import '../assets/index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Home() {
  return (
    
    <div className="players">

      <div className="player1">
        <button><Link to="/" 
          style={{ textDecoration: 'none' }}>GET A POKEMON</Link></button>
        <button><Link to="/pokemon" 
          style={{ textDecoration: 'none' }}>SELECT</Link></button>
      </div>

      <div className="player2">
        <button><Link to="/" 
          style={{ textDecoration: 'none' }}> GET A POKEMON</Link></button>
        <button><Link to="/pokemon"
          style={{ textDecoration: 'none' }}>SELECT</Link></button>
      </div>
    </div>
  )
}

export default Home