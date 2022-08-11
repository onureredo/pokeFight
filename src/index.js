import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Playground from './Playground';
import PokemonList from './PokemonList';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/pokemonList" element={<PokemonList />} />
    </Routes>
  </BrowserRouter>
);
