import { Link } from 'react-router-dom';

const Header = () => {

	return(
		<header>
		<h1><span>Bronson Pearl</span></h1>
		<nav style={styles.navbar}>
    <ul style={styles.navLinks}>
      <li>
        <Link to="/">Home</Link> 
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
      
      <li>
        <Link to="/education">Education</Link>
      </li>

      <li>
        <Link to="/projects">Projects</Link> 
      </li>

      <li>
        <Link to="/services">Services</Link> 
      </li>

      <li>
        <Link to="/contact">Contact</Link> 
      </li>
    </ul>
		</nav>
		</header>
	);

};


const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#333',
    color: '#fff',
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    boxSizing: 'border-box'
  },

    navLinks: {
	    display: 'flex',
	    listStyle: 'none',
	    gap: '20px',
	    margin: 0,
	    padding: 0 
  }
};

export default Header;
