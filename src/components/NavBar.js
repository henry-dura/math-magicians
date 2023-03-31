import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <div className="logo">Math Magicians</div>
    <div className="links">
      <div className="link">
        <Link to="/">Home</Link>

      </div>
      <hr />
      <div className="link">
        <Link to="/calculator">Calculator</Link>

      </div>
      <hr />
      <div className="link">
        <Link to="/quotes">Quotes</Link>

      </div>
    </div>

  </nav>
);

export default NavBar;
