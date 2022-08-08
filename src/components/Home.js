import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pokemon from './Pokemon';
import '../assets/index.css';

function Home() {
  return (
    <div className="players">

      <div className="player1">
        <button>RANDOM POKEMON</button>
        <input></input>
        <button>SELECT</button>
      </div>

      <div className="player2">
        <button>RANDOM POKEMON</button>
        <input></input>
        <button>SELECT</button>
      </div>

    </div>
  )
}

export default Home