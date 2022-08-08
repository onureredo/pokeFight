import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import SingleCard from './components/Singlecard';
import PokemonInfo from './components/Pokemoninfo';


function App() {
  return (

    <Router>
      <div className="home">
        <Home />
        <div className="pokefight">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route exact path="/pokemon" element={<Pokemon />} /> 
            <Route path="/pokemon/:id" element={<SingleCard />} /> 
            <Route path="/pokemon/:id/:info" element={<PokemonInfo />} /> 
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
