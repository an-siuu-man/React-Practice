import './App.css';
import Home from './components/Home';
import Navbar from './components/navBar';
import OurTeam from './components/OurTeam';
import ContactUs from './components/ContactUs';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function AppRender() {


  const location = useLocation();

  return (
        <TransitionGroup>
          <CSSTransition
            timeout={400}
            classNames="page"
            key={location.pathname}
            >
        <div className="page"> 
          <Routes location={location}>
            <Route exact path="/" element= {<Home />} />
            <Route path="/ourteam" element= {<OurTeam />} />
            <Route path="/contactus" element= {<ContactUs />} />
          </Routes>
          </div>  
          </CSSTransition>
          </TransitionGroup>

  );
}


const App =  () => {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <AppRender />
      </div>
    </Router>
  );
}

export default App;
