import "./host.css";
import { Outlet, NavLink } from "react-router-dom";
import { hostNavs } from "../../Data/NavItems";

function HostLayout() {
  const hostNavigation = hostNavs.map((item, index) => (
    <NavLink
      key={index}
      to={item.link}
      className={({ isActive }) => (isActive ? "active" : undefined)}
      end
    >
      {item.name}
    </NavLink>
  ));

  return (
    <div>
      <>
        <nav className="host-nav">{hostNavigation}</nav>
        <Outlet />
      </>
    </div>
  );
}

export default HostLayout;
