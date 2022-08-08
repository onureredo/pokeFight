import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';


function App() {
  return (

    <Router>
      <div className="home">
        <Home />
        <div className="pokefight">
          <Routes> <Route path="/pokemon" element={<Pokemon />} /> </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
