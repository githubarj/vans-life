import "./host.css";
import { Outlet, Link } from "react-router-dom";

function HostLayout() {
  return (
    <div>
      <>
        <nav className="host-nav">
          <Link to="/host">Dashboard</Link>
          <Link to="/host/income">Income</Link>
          <Link to="/host/reviews">Reviews</Link>
        </nav>
        <Outlet />
      </>
    </div>
  );
}

export default HostLayout;
