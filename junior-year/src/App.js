import './App.css';
import Home from './components/Home';
import Navbar from './components/navBar';
import OurTeam from './components/OurTeam';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-content"> 
          <Routes>           
            <Route exact path="/" element= {<Home />} />
            <Route path="/ourteam" element= {<OurTeam />} />
          </Routes>
          </div>        
      </div>
    </Router>
  );
}

export default App;
