import "./navbar.css";
import { navItems } from "../../Data/NavItems";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navigationLinks = navItems.map((item, index) => (
    <NavLink
      key={index}
      className={`nav-text ${({ isActive }) =>
        isActive ? "active" : undefined} `}
      to={item.link}
      end
    >
      {item.name || <img src={item.icon} className="avtar-icon" alt="" />}
    </NavLink>
  ));

  function clearLocal () {
    localStorage.removeItem("isLoggedIn")
  }

  return (
    <nav className="nav-container">
      <Link className="app-heading" to="/">
        #VANLIFE
      </Link>
      <div className="nav-links">
        {navigationLinks} 
        <button onClick={clearLocal} >x</button>
       </div>
    </nav>
  );
}

export default Navbar;
