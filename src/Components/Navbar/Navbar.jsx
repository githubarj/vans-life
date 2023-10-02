import "./navbar.css";
import { navItems } from "../../Data/NavItems";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const location = useLocation();
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    setNavLinks(
      navItems.map((item, index) => (
        <Link
          key={index}
          className={`nav-text ${location.pathname === item.link && "active"} `}
          to={item.link}
        >
          {item.name}
        </Link>
      ))
    );
  }, [location.pathname]);

  return (
    <nav className="nav-container">
      <Link className="app-heading" to="/">
        #VANLIFE
      </Link>
      <div className="nav-links">{navLinks}</div>
    </nav>
  );
}

export default Navbar;
