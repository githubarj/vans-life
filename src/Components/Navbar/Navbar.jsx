import "./navbar.css";
import { navItems } from "../../Data/NavItems";
import { Link } from "react-router-dom";
function Navbar() {
  const navLinks = navItems.map((item, index) => (
    <Link key={index} className="nav-text" to={item.link}>
      {item.name}
    </Link>
  ));

  return (
    <nav className="nav-container">
      <Link className="app-heading" to="/" >#VANLIFE</Link>
      <div className="nav-links">{navLinks}</div>
    </nav>
  );
}

export default Navbar;
