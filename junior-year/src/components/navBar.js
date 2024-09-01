import './Navbar.css';
import homeicon from './homeicon.png';
import membericon from './membericon.png';
import phoneicon from './phoneicon.png'
import { Link } from 'react-router-dom';


const handleImageClick = () => {
  window.location.href = "/";
};
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><img onClick ={handleImageClick} className='club-logo' height='80px'src="https://se-images.campuslabs.com/clink/images/5ae67c31-2fed-4b22-8a55-a963a0ba8ab7d3874c13-93fb-4e8c-b1b5-0e5e69368c77.png?preset=med-sq" alt='BHF logo'/>
      <h1>Beacon of Hope Foundation</h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to='/'><img src={homeicon} alt=''/><br/>Home</Link></li>
        <li className="nav-item"><Link to='/ourteam'><img src={membericon} alt=''/>Our Team</Link></li>
        <li className="nav-item"><a href="/"><img src={phoneicon} alt=''/>Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
