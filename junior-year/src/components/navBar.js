import './Navbar.css';
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
        <li className={ isCurrentPath('/') ? "nav-item-active" : 'nav-item' }  ><Link to='/' ><svg className={ isCurrentPath('/') ? "nav-icon-active" : 'nav-icon' } fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.012,10.981,3,11H5v9a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11h2a1,1,0,0,0,.555-1.832l-9-6a1,1,0,0,0-1.11,0l-9,6a1,1,0,0,0-.277,1.387A.98.98,0,0,0,3.012,10.981ZM10,14a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v5H10Z"/></svg>Home</Link></li>
        <li className={ isCurrentPath('/ourteam') ? "nav-item-active" : 'nav-item' }  >
          <Link to='/ourteam'>
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path className={ isCurrentPath('/ourteam') ? "nav-icon-active" : 'nav-icon' } d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5zm-6.712 3.006a6.983 6.983 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994zM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/>
              </g>
            </svg>Our Team
          </Link>
        </li>
        <li className={ isCurrentPath('/contactus') ? "nav-item-active" : 'nav-item' }  ><Link to='/contactus'><svg className={ isCurrentPath('/contactus') ? "nav-icon-active" : 'nav-icon' } viewBox="0 0 24 24" height='24px' width='24px' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445ZM16,11a1,1,0,0,0,1-1V8h2a1,1,0,0,0,0-2H17V4a1,1,0,0,0-2,0V6H13a1,1,0,0,0,0,2h2v2A1,1,0,0,0,16,11Z"></path></g></svg>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
