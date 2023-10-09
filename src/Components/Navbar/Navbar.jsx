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
      {item.name}
    </NavLink>
  ));

  return (
    <nav className="nav-container">
      <Link className="app-heading" to="/">
        #VANLIFE
      </Link>
      <div className="nav-links">{navigationLinks}</div>
    </nav>
  );
}

export default Navbar;
