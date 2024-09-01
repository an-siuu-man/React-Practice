import './Navbar.css';
import homeicon from './homeicon.png';
import membericon from './membericon.png';
import phoneicon from './phoneicon.png'
import { Link, useLocation } from 'react-router-dom';




const Navbar = () => {

  const location = useLocation();
  
  const isCurrentPath = (path) => {
    return location.pathname === path;
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand"><img className='club-logo' height='80px'src="https://se-images.campuslabs.com/clink/images/5ae67c31-2fed-4b22-8a55-a963a0ba8ab7d3874c13-93fb-4e8c-b1b5-0e5e69368c77.png?preset=med-sq" alt='BHF logo'/>
      <h1>Beacon of Hope Foundation</h1>
      </div>
      <ul className="navbar-nav">
        <li className={ isCurrentPath('/') ? "nav-item-active" : 'nav-item' }  ><Link to='/' ><img src={homeicon} alt=''/>Home</Link></li>
        <li className={ isCurrentPath('/ourteam') ? "nav-item-active" : 'nav-item' }  ><Link to='/ourteam'><img src={membericon} alt=''/>Our Team</Link></li>
        <li className={ isCurrentPath('/contactus') ? "nav-item-active" : 'nav-item' }  ><Link to='/contactus'><img src={phoneicon} alt=''/>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
