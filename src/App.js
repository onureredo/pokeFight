import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>

        </div>
      </div>
    </Router>

   
  );
}

export default App;
